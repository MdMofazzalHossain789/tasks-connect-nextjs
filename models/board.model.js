import { model, models, Schema } from "mongoose";

const boardSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    tasks: {
      type: [Schema.Types.ObjectId],
      ref: "Task",
      default: [],
    },
    users: {
      type: [Schema.Types.ObjectId],
      ref: "User",
      default: [],
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    visibility: {
      type: String,
      default: "Private",
      enum: ["Private", "Public"],
      required: true,
    },
  },
  { timestamps: true }
);

export const Board = models?.Board || model("Board", boardSchema);
