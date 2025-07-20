import { cn } from "@/lib/utils";

const Button = ({ variant, className, children }) => {
  return (
    <div
      className={cn(
        "w-full py-4 px-4 flex items-center justify-center text-lg font-semibold  rounded-md gap-x-4 button-hover",
        className,
        variant === "outline" && "border-1 border-zinc-500/10"
      )}
    >
      {children}
    </div>
  );
};

export default Button;
