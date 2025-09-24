"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import {
  Calendar,
  Check,
  CheckCheck,
  Clipboard,
  Clock,
  Ellipsis,
  Eye,
  LayoutList,
  MessageSquare,
  MessagesSquare,
  X,
} from "lucide-react";
import moment from "moment";
import { format } from "timeago.js";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Button } from "../ui/button";

const TaskItem = ({ completed, missed, task, onToggle, isSelected }) => {
  const Wrapper = onToggle ? Label : "div";
  const Toggle = onToggle ? Checkbox : "div";
  const { id, title, description, datetime, isCompleted } = task;

  return (
    <div className="flex items-center w-full gap-x-4">
      {missed ? (
        <X className="text-red-500" />
      ) : completed ? (
        <CheckCheck className="text-green-500" />
      ) : (
        <Toggle
          {...(onToggle
            ? {
                id: id,
                checked: isSelected,
                onCheckedChange: () => onToggle(id),
              }
            : {})}
          className="data-[state=checked]:border-green-600 data-[state=checked]:bg-green-600 data-[state=checked]:text-white dark:data-[state=checked]:border-green-700 dark:data-[state=checked]:bg-green-700 transition duration-300 rounded-full w-6 h-6"
        />
      )}
      <Wrapper
        {...(onToggle ? { htmlFor: id } : {})}
        className={cn(
          "w-full flex items-center gap-3 rounded-lg border-2 p-3 has-[[aria-checked=true]]:border-green-600 has-[[aria-checked=true]]:bg-green-50 dark:has-[[aria-checked=true]]:border-green-700 dark:has-[[aria-checked=true]]:bg-green-900 cursor-pointer transition duration-300",
          "bg-background dark:bg-zinc-800 dark:border-zinc-500 hover:bg-green-50 dark:hover:bg-green-950",
          missed &&
            "border-red-500/30 bg-red-500/10 dark:bg-red-500/20 dark:border-red-100/30 hover:bg-red-50 dark:hover:bg-red-950/50",
          completed &&
            "bg-green-500/10 dark:bg-green-500/20 dark:border-green-100/30 hover:bg-green-50 dark:hover:bg-green-950/50"
        )}
      >
        <div className="w-full font-normal">
          <div className="flex items-center gap-x-2 w-full justify-between">
            <p className="text-xs flex items-center gap-x-2">
              <Clock className="w-4" />
              {completed ? (
                <>Completed at </>
              ) : missed ? (
                <>Missed At </>
              ) : (
                format(datetime)
              )}
            </p>
            <div className="flex items-center gap-x-2 text-muted-foreground">
              <LayoutList className="w-4 h-4" />
              <p>Board Name</p>
            </div>
          </div>
          <div className="py-2">
            <h1 className="text-lg leading-none font-medium">{title}</h1>
            <p className="text-muted-foreground text-sm">{description}</p>
          </div>

          {/* Task Bottom */}
          <div className="flex items-center justify-between gap-x-2 text-xs w-full">
            <p className="text-muted-foreground">
              Added on {moment(datetime).format("DD MMM YYYY")}
            </p>

            <div className="shrink-0 flex items-center gap-x-4 relative z-10">
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center text-muted-foreground gap-x-2">
                    <Eye className="w-4 h-4 text-muted-foreground" />
                    <p className="font-mono">30</p>
                  </div>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <h1 className="font-semibold">Seen By 30</h1>
                  <p className="text-muted">
                    See All 30 people have viewed this task
                  </p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center gap-x-2 hover:bg-black/10 dark:hover:bg-white/10 px-2 py-1 rounded-md">
                    <CheckCheck className="w-4 h-4 text-muted-foreground"></CheckCheck>
                    <div className="flex items-center">
                      <div className="*:data-[slot=avatar]:ring-background flex *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
                        <Avatar className="w-4 h-4">
                          <AvatarImage
                            src="https://github.com/shadcn.png"
                            alt="@shadcn"
                          />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <Avatar className="w-4 h-4">
                          <AvatarImage
                            src="https://github.com/leerob.png"
                            alt="@leerob"
                          />
                          <AvatarFallback>LR</AvatarFallback>
                        </Avatar>
                        <Avatar className="w-4 h-4">
                          <AvatarImage
                            src="https://github.com/evilrabbit.png"
                            alt="@evilrabbit"
                          />
                          <AvatarFallback>ER</AvatarFallback>
                        </Avatar>
                      </div>
                      <p className="h-4 min-w-4 rounded-full px-1 font-mono tabular-nums">
                        20+
                      </p>
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <div className="text-md">
                    <h1 className="font-semibold">Completed By 20</h1>
                    <p className="text-muted">
                      See All 20 people completed this task
                    </p>
                  </div>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div>
                    <MessagesSquare className="w-4 h-4 text-muted-foreground" />
                  </div>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>See Discussions by 20 people</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>
      </Wrapper>
      <div>
        <Ellipsis className="text-muted-foreground" />
      </div>
    </div>
  );
};

export default TaskItem;
