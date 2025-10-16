import * as React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline" | "destructive";
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className = "", variant = "default", ...props }, ref) => {
    const variants = {
      default: "bg-slate-900 text-white",
      outline: "border border-slate-300 bg-white text-slate-900",
      destructive: "bg-red-600 text-white"
    };

    return (
      <div
        ref={ref}
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${variants[variant]} ${className}`}
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";

export { Badge };
