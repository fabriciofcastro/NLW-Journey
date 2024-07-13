interface ButtonZincProps {
  text: string
  Icon?: string
  width?: string
}

export function ButtonZinc({text, Icon, width}: ButtonZincProps) {
  return (
    <button
      type="button"
      className={`bg-zinc-800 shadow-shape rounded-lg px-5 h-11 font-medium flex justify-center items-center gap-2 hover:bg-zinc-700 transition-colors duration-200 ease-linear w-${width}`}
    >
      <Icon className="size-5" />
      {text}
    </button>
  )
}
