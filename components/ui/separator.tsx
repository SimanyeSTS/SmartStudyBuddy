import * as React from "react";

const Separator = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`border-t border-slate-200 ${className}`}
        {...props}
      />
    );
  }
);

Separator.displayName = "Separator";

export { Separator };
