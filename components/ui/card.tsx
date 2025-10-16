import * as React from "react";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`bg-white rounded-lg border border-slate-200 shadow-sm ${className}`}
        {...props}
      />
    );
  }
);

Card.displayName = "Card";

export { Card };
