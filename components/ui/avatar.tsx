import * as React from "react";

const Avatar = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`relative overflow-hidden rounded-full ${className}`}
        {...props}
      />
    );
  }
);

Avatar.displayName = "Avatar";

export { Avatar };
