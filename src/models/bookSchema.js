import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    format: {
      type: String,
      required: true,
      enum: ["Hardcover", "Paperback", "Ebook"],
    },
    release_year: {
      type: Number,
      required: true,
    },
    features: {
      type: [String], // e.g., ["Multicolor"]
      default: [],
    },
    language: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity_available: {
      type: Number,
      default: 1,
    },
    about: {
      type: String,
      required: true,
    },
    image_url: {
      type: String, // URL of the book cover or image
      required: false, // Make it optional if not every book has an image
    },
  },
  {
    timestamps: true, // Automatically add `createdAt` and `updatedAt` fields
  }
);

export default mongoose.models.Book || mongoose.model("Book", bookSchema);
