"use client";
import { Button } from "@/components/ui/button";
import useTaskStore from "@/store/useTaskStore";
import React from "react";

const MarkAsDoneButton = ({ selectedTasks }) => {
  console.log(selectedTasks);
  return <Button>Mark as Done ({selectedTasks.length})</Button>;
};

export default MarkAsDoneButton;
