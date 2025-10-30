"use server";

import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import sharp from "sharp";
import { ServerActionError } from "../handleError";
import {
  BLOG_COVER_HEIGHT,
  BLOG_COVER_QUALITY,
  BLOG_COVER_WIDTH,
  BLOG_IMG_QUALITY,
  R2_PUBLIC_URL,
} from "@/app/_utils/constants";

const s3 = new S3Client({
  region: "auto",
  endpoint: process.env.R2_ENDPOINT,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  },
  maxAttempts: 3,
});

export async function uploadBlogImageAction(formData) {
  try {
    const file = formData.get("file");
    const isCoverImage = JSON.parse(formData.get("isCoverImage"));

    if (!file) throw new Error("Please upload a image!");

    // FIXME: ADD AUTHENTICATION

    const arrayBuffer = await file.arrayBuffer();
    const inputBuffer = Buffer.from(arrayBuffer);

    let outputBuffer;
    if (isCoverImage) {
      outputBuffer = await sharp(inputBuffer)
        .resize(BLOG_COVER_WIDTH, BLOG_COVER_HEIGHT)
        .jpeg({ quality: BLOG_COVER_QUALITY })
        .toBuffer();
    } else {
      outputBuffer = await sharp(inputBuffer)
        .jpeg({ quality: BLOG_IMG_QUALITY })
        .toBuffer();
    }

    const fileName = `${isCoverImage ? "cover" : "blog"}-${Math.floor(
      1000 + Math.random() * 9000
    )}-${Date.now()}.jpeg`;

    const command = new PutObjectCommand({
      Bucket: process.env.R2_BUCKET_NAME,
      Key: fileName,
      Body: outputBuffer,
      ContentType: file.type,
      ACL: "public-read",
    });

    await s3.send(command);
    const publicUrl = `${R2_PUBLIC_URL}/${fileName}`;

    return { success: true, photoUrl: publicUrl };
  } catch (err) {
    console.log(err);
    return new ServerActionError(err.message).genericError();
  }
}
