import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { mongoClient } from "@/db/mongoClient";
import { nextCookies } from "better-auth/next-js";
import { MIN_PASSWORD_LENGTH } from "@/app/_utils/constants";

const db = (await mongoClient).db();

export const auth = betterAuth({
  database: mongodbAdapter(db),
  user: {
    modelName: "admins",
  },
  emailAndPassword: {
    enabled: true,
    disableSignUp: true,
    requireEmailVerification: false,
    minPasswordLength: MIN_PASSWORD_LENGTH,
  },
  //   events: {
  //     // 🔥 fires when a new user is created inside Better Auth
  //     async userCreated(user) {
  //       await dbConnect();

  //       const existing = await Admin.findOne({ email: user.email });
  //       if (!existing) {
  //         await Admin.create({
  //           name: user.name,
  //           email: user.email,
  //           image: user.image,
  //           role: "admin", // you can hardcode or derive
  //           isActive: true,
  //         });
  //       }
  //     },
  //   },
  plugins: [nextCookies()],
});
