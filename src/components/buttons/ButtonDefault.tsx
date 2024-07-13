import { ReactHTMLElement } from 'react'

interface ButtonDefaultProps extends ReactHTMLElement<HTMLButtonElement> {
  text: string
  Icon?: string
  onClick?: () => void
}

export function ButtonDefault({ text, Icon, onClick }: ButtonDefaultProps) {
  return (
    <button
      onClick={onClick}
      className="bg-lime-300  text-lime-950 rounded-lg px-5 py-2 flex items-center justify-center gap-2 hover:bg-lime-400 transition-colors duration-200 ease-linear shadow-shape"
    >
      <Icon className="size-5" />
      {text}
    </button>
  )
}
