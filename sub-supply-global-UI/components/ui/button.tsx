import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"
import { motion, HTMLMotionProps } from "framer-motion"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-bold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 uppercase tracking-[0.2em] rounded-none shadow-sm hover:shadow-xl active:scale-[0.98] touch-manipulation min-h-[44px]",
  {
    variants: {
      variant: {
        default: "bg-[#2E4F4A] text-white hover:bg-[#233f3b]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-[#2E4F4A] bg-transparent hover:bg-[#2E4F4A] hover:text-white text-[#2E4F4A]",
        "outline-light": 
          "border border-white/30 text-white bg-transparent hover:bg-white hover:text-[#2E4F4A] hover:border-white", // Thinner 1px border for finer look
        secondary:
          "bg-[#FFDE56] text-[#2E4F4A] hover:bg-[#FFE580]",
        ghost: "hover:bg-[#2E4F4A]/5 hover:text-[#2E4F4A] shadow-none hover:shadow-none bg-transparent text-[#8D9B9A]",
        link: "text-primary underline-offset-4 hover:underline shadow-none",
        primary: "bg-[#2E4F4A] text-white hover:bg-[#233f3b]",
        accent: "bg-[#EF343A] text-white hover:bg-[#d62b31]",
      },
      size: {
        default: "h-11 sm:h-12 px-4 sm:px-6 text-[10px] sm:text-xs", // Mobile-first sizing
        sm: "h-9 px-3 sm:px-4 text-[9px] sm:text-[10px]",
        lg: "h-12 sm:h-14 px-6 sm:px-8 text-xs sm:text-sm", 
        icon: "h-10 w-10 sm:h-12 sm:w-12",
      },
      isSkewed: {
        true: "",
        false: ""
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      isSkewed: false
    },
  }
)

export type ButtonProps = Omit<HTMLMotionProps<"button">, "ref" | "children"> & 
  VariantProps<typeof buttonVariants> & {
  asChild?: boolean
  children?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isSkewed, children, ...props }, ref) => {
    return (
      <motion.button
        className={cn(buttonVariants({ variant, size, isSkewed, className }))}
        ref={ref}
        whileHover={{ y: -2 }}
        whileTap={{ y: 0 }}
        {...props}
      >
        <span className="flex items-center gap-2">
            {children}
        </span>
      </motion.button>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }