import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      default: "bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-900",
      outline: "border border-slate-300 bg-white hover:bg-slate-50 focus:ring-slate-900",
      ghost: "hover:bg-slate-100 focus:ring-slate-900",
      destructive: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-600"
    };

    const sizes = {
      default: "h-10 px-4 py-2 text-sm",
      sm: "h-8 px-3 text-xs",
      lg: "h-12 px-6 text-base",
      icon: "h-10 w-10"
    };

    if (asChild && React.isValidElement(props.children)) {
      return React.cloneElement(props.children as React.ReactElement<React.HTMLAttributes<HTMLElement>>, {
        className: `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`
      });
    }

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
