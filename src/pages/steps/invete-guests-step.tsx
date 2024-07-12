import { UserRoundPlus } from "lucide-react"

interface InviteGuetsStepProps {
  openGuestsModal: () => void
  openConfirmTripModal: () => void
  emailToInvite: [string, string]
}

export function InviteGuestsStep({
  openGuestsModal,
  openConfirmTripModal,
  emailToInvite
}: InviteGuetsStepProps) {
  return (
    <div className="bg-zinc-900 p-4 rounded-xl flex items-center shadow-shape gap-2">
      <button
        onClick={openGuestsModal}
        className="flex items-center gap-2 flex-1 cursor-pointer"
      >
        <UserRoundPlus className="size-5 text-zinc-400" />
        {emailToInvite.length > 0 ? (
          <>
            <span className="text-zinc-100 text-lg flex-1 text-start">
              {`${emailToInvite.length} pessoa(s) convidada(s)`}
            </span>
            <button
              type="button"
              className="border-solid border border-zinc-600 py-2 px-3 rounded-lg shadow-shape hover:border-zinc-200 transition-colors duration-200 ease-linear"
            >
              Alterar
            </button>
          </>
        ) : (
          <span className="text-zinc-400 text-lg flex-1 text-start">
            Adicionar quem estará na viagem?
          </span>
        )}
      </button>
      <div className="w-px h-6 bg-zinc-800" />
      <button
        onClick={openConfirmTripModal}
        type="button"
        className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400 transition-colors ease-linear duration-200"
      >
        Confirmar viagem
        <UserRoundPlus className="size-5" />
      </button>
    </div>
  )
}
