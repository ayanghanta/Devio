import mongoose from "mongoose";
import slugify from "slugify";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "A Blog must have a title"],
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    required: [true, "A Blog must have a description"],
  },
  blogCoverImage: {
    type: String,
    required: [true, "A Blog must have a cover image"],
  },
  content: {
    type: String,
    required: [true, "A Blog must have some content"],
  },
  categories: {
    type: [String],
  },
  codeTheme: {
    type: String,
    default: "github",
  },
  codeLanguage: {
    type: String,
    default: "javascript",
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
  publishedAt: {
    type: Date,
    default: Date.now,
  },
  editAt: {
    type: Date,
    default: Date.now,
  },
  author: {
    type: String,
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  isPublished: {
    type: Boolean,
    default: true,
  },
  readTime: {
    type: String,
    default: "5",
  },
});

blogSchema.pre("save", function (next) {
  // if (this.isModified("title") || this.isNew || true) {
  this.slug = slugify(this.title, {
    replacement: "-",
    lowercase: true,
    trim: true,
    strict: true,
  });
  // }

  next();
});

// Use the cached model or define it if it doesn't exist
const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

export default Blog;
