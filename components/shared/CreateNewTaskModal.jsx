"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { ChevronDown } from "lucide-react";
import { Calendar } from "../ui/calendar";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { v4 } from "uuid";
import useLocalStorageSWR from "@/hooks/useLocalStorage";

// ------------------
// 1. Define schema
// ------------------
const taskSchema = z.object({
  title: z.string().min(1, "Task name is required"),
  description: z.string().optional(),
  date: z.date({ required_error: "Please select a date" }),
  time: z.string().min(1, "Please select a time"),
  priority: z.enum(["low", "normal", "medium", "high"], {
    required_error: "Select a priority",
  }),
});

export default function CreateNewTaskModal({ openDialog, setOpenDialog }) {
  const [open, setOpen] = useState(false);
  const { value: tasks, setValue: setTasks } = useLocalStorageSWR("tasks", []);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      title: "",
      description: "",
      date: undefined,
      time: "",
      priority: "normal",
    },
  });

  const date = watch("date");

  const onSubmit = (data) => {
    // addTask({ ...data, id: v4() });

    const localDateStr = new Date(data.date).toLocaleDateString("en-CA");
    // "en-CA" gives YYYY-MM-DD

    // Combine with your time string
    const datetime = new Date(`${localDateStr}T${data.time}`);

    const newTodos = [
      ...tasks,
      {
        ...data,
        id: v4(),
        datetime,
        isCompleted: false,
        isMissed: false,
        missedAt: null,
        completedAt: null,
        createdAt: new Date(),
      },
    ];
    setTasks(newTodos);
    setOpenDialog(false);
  };

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Add New Task</DialogTitle>
            <DialogDescription>
              Give a name and description to your task.
            </DialogDescription>
          </DialogHeader>

          {/* Title */}
          <div className="grid gap-3">
            <Label htmlFor="title">Name</Label>
            <Input id="title" placeholder="Task name" {...register("title")} />
            {errors.title && (
              <p className="text-sm text-red-500">{errors.title.message}</p>
            )}
          </div>

          {/* Date & Time */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <div className="flex flex-col gap-3">
              <Label htmlFor="date-picker">Date</Label>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    id="date-picker"
                    className="w-32 justify-between font-normal text-sm"
                  >
                    {date ? date.toLocaleDateString() : "Select date"}
                    <ChevronDown />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-auto overflow-hidden p-0"
                  align="start"
                >
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(date) => {
                      setValue("date", date, { shouldValidate: true });
                      setOpen(false);
                    }}
                  />
                </PopoverContent>
              </Popover>
              {errors.date && (
                <p className="text-sm text-red-500">{errors.date.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-3">
              <Label htmlFor="time-picker">Time</Label>
              <Input
                type="time"
                id="time-picker"
                step="1"
                {...register("time")}
              />
              {errors.time && (
                <p className="text-sm text-red-500">{errors.time.message}</p>
              )}
            </div>
          </div>

          {/* Priority */}
          <div className="flex flex-col gap-3 mt-4">
            <Label htmlFor="priority">Priority</Label>
            <Select
              onValueChange={(val) =>
                setValue("priority", val, { shouldValidate: true })
              }
              defaultValue="normal"
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Set priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Priorities</SelectLabel>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="normal">Normal</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {errors.priority && (
              <p className="text-sm text-red-500">{errors.priority.message}</p>
            )}
          </div>

          <DialogFooter className="mt-6">
            <Button type="submit">Add Task</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
