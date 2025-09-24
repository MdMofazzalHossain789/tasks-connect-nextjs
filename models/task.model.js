import { Schema, models, model } from "mongoose";

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    isMultiTask: {
      type: Boolean,
      default: false,
    },
    subTasks: {
      type: [Schema.Types.ObjectId],
      ref: "Task",
      default: [],
    },
    assignedTo: {
      type: [Schema.Types.ObjectId],
      ref: "User",
      default: [],
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    forIndividual: {
      type: Boolean,
      default: false,
    },
    deadline: {
      type: Date,
    },
    noDeadline: {
      type: Boolean,
      default: false,
    },
    completed: {
      type: [Schema.Types.ObjectId],
      ref: "User",
      default: [],
    },
    missed: {
      type: [Schema.Types.ObjectId],
      ref: "User",
      default: [],
    },
    seen: {
      type: [Schema.Types.ObjectId],
      ref: "User",
      defualt: [],
    },
    discussions: {
      type: [Schema.Types.ObjectId],
      ref: "Discussion",
      defualt: [],
    },
    priority: {
      type: String,
      default: "Low",
      enum: ["Low", "Medium", "High"],
    },
    board: {
      type: Schema.Types.ObjectId,
      ref: "Board",
    },
  },
  {
    timestamps: true,
  }
);

export const Task = models?.Task || model("Task", taskSchema);
