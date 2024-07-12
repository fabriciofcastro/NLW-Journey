import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react"

interface DestinationAndDataStepProps {
  isGuestsInputOpen: boolean
  closeGuestsInput: () => void
  openGuestsInput: () => void
}

export function DestinationAndDateStep({
  isGuestsInputOpen,
  closeGuestsInput,
  openGuestsInput
}: DestinationAndDataStepProps) {
  return (
    <div className=" bg-zinc-900 p-4 rounded-xl flex items-center shadow-shape gap-2">
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400" />
        <input
          disabled={isGuestsInputOpen}
          type="text"
          placeholder="Para onde você vai?"
          className="bg-transparent text-lg placeholder-zinc-400 outline-none"
        />
      </div>
      <div className="flex items-center gap-2 flex-1">
        <Calendar className="size-5 text-zinc-400" />
        <input
          disabled={isGuestsInputOpen}
          type="text"
          placeholder="Quando?"
          className="bg-transparent text-lg placeholder-zinc-400 outline-none"
        />
      </div>
      <div className="w-px h-6 bg-zinc-800" />
      {isGuestsInputOpen ? (
        <button
          onClick={closeGuestsInput}
          className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700 transition-colors duration-200 ease-linear "
        >
          Alterar local/data
          <Settings2 className="size-5" />
        </button>
      ) : (
        <button
          onClick={openGuestsInput}
          className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400 transition-colors ease-linear duration-200 "
        >
          Continuar
          <ArrowRight className="size-5" />
        </button>
      )}
    </div>
  )
}
