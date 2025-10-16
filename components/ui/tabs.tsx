import * as React from "react";

const Tabs = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`${className}`}
        {...props}
      />
    );
  }
);

Tabs.displayName = "Tabs";

export { Tabs };
