import { Schema, model, models } from "mongoose";

const discussionSchema = new Schema(
  {
    message: {
      type: String,
      required: true,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    on: {
      type: Schema.Types.ObjectId,
      ref: "Task",
      required: true,
    },
    replies: {
      type: [Schema.Types.ObjectId],
      ref: "Discussion",
      default: [],
    },
    isReply: {
      type: Boolean,
      default: false,
    },
    replyTo: {
      type: Schema.Types.ObjectId,
      ref: "Discussion",
    },
    resolved: {
      type: Boolean,
      default: false,
    },
    resolvedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: [],
      required: true,
    },
    resolvedAt: {
      type: Date,
      default: Date.now,
    },
    upVotes: {
      type: [Schema.Types.ObjectId],
      ref: "User",
      default: [],
      required: true,
    },
    downVotes: {
      type: [Schema.Types.ObjectId],
      ref: "User",
      default: [],
      required: true,
    },
  },
  { timestamps: true }
);

export const Discussion =
  models?.Discussion || model("Discussion", discussionSchema);
