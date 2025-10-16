import * as React from "react";

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className = "", type = "text", ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={`flex h-10 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 disabled:opacity-50 ${className}`}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
