import { UserRoundPlus } from 'lucide-react'
import { Button } from '../../components/buttons/Button'

interface InviteGuetsStepProps {
  openGuestsModal: () => void
  openConfirmTripModal: () => void
  emailToInvite: [string, string]
}

export function InviteGuestsStep({
  openGuestsModal,
  openConfirmTripModal,
  emailToInvite,
}: InviteGuetsStepProps) {
  return (
    <div className="bg-zinc-900 p-4 rounded-xl flex items-center shadow-shape gap-2">
      <Button variant="secondary" size="flex1" onClick={openGuestsModal}>
        <UserRoundPlus className="size-5 text-zinc-400" />
        {emailToInvite.length > 0 ? (
          <>
            <span className="text-zinc-100 text-lg flex-1 text-start">
              {`${emailToInvite.length} pessoa(s) convidada(s)`}
            </span>
            <Button>Alterar</Button>
          </>
        ) : (
          <span className="text-zinc-400 text-lg flex-1 text-start">
            Adicionar quem estará na viagem?
          </span>
        )}
      </Button>
      <div className="w-px h-6 bg-zinc-800" />
      <Button onClick={openConfirmTripModal}>
        Confirmar viagem
        <UserRoundPlus className="size-5" />
      </Button>
    </div>
  )
}
