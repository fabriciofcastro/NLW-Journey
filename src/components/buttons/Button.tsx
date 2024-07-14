import { ComponentProps, ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const buttonVariants = tv({
  base: 'rounded-lg px-5 py-2 flex items-center justify-center gap-2 shadow-shape transition-colors duration-200 ease-linear',

  variants: {
    variant: {
      primary: 'bg-lime-300 text-lime-950  hover:bg-lime-400 ',
      secondary: 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700',
    },

    size: {
      primary: 'py-2',
      full: 'w-full h-11',
      flex1: 'flex-1',
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'primary',
  },
})

interface ButtonProps
  extends ComponentProps<'button'>,
  VariantProps<typeof buttonVariants> {
  children: ReactNode
}

export function Button({ children, size, variant, ...props }: ButtonProps) {
  return (
    <button {...props} className={buttonVariants({ variant, size })}>
      {children}
    </button>
  )
}
