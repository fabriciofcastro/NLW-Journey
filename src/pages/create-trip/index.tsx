import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../../public/logo.svg'
import { DestinationAndDateStep } from '../steps/destination-and-date-step'
import { ConfirmTripModal } from './confim-tripmodal'
import { InviteGuestsModal } from './invite-guests-modal'
import { InviteGuestsStep } from '../steps/invete-guests-step'

export function CreateTripPage() {
  const navigate = useNavigate()

  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(() => false)
  const [isGuestsOpenModal, setGuestsOpenModal] = useState(() => false)
  const [emailToInvite, setEmailToEnvite] = useState(() => [])
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(
    () => false,
  )

  function openGuestsInput() {
    setIsGuestsInputOpen(() => true)
  }

  function closeGuestsInput() {
    setIsGuestsInputOpen(() => false)
  }

  function openGuestsModal() {
    setGuestsOpenModal(() => true)
  }

  function closeGuestsModal() {
    setGuestsOpenModal(() => false)
  }

  function openConfirmTripModal() {
    setIsConfirmTripModalOpen(() => true)
  }

  function closeConfirmTripModal() {
    setIsConfirmTripModalOpen(() => false)
  }

  function addEmailEnvite(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const data = new FormData(e.currentTarget)
    const email = data.get('email')?.toString()

    if (!email) {
      return
    }

    if (emailToInvite.includes(email)) {
      return
    }

    setEmailToEnvite(() => [...emailToInvite, email])

    e.currentTarget.reset()
  }

  function removeEmailFromInvite(removeEmail: string) {
    const newEmailList = emailToInvite.filter((email) => email !== removeEmail)

    setEmailToEnvite(newEmailList)
  }

  function createTrip(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    navigate('/trips/123')
  }

  return (
    <div className="flex justify-center items-center  h-screen bg-bgHome bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10 ">
        <div className="flex flex-col items-center gap-3">
          <img src={logo} alt="Logo plann.er" />
          <p className="text-zinc-300 text-lg">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>

        <div className="space-y-4">
          <DestinationAndDateStep
            isGuestsInputOpen={isGuestsInputOpen}
            closeGuestsInput={closeGuestsInput}
            openGuestsInput={openGuestsInput}
          />
          {isGuestsInputOpen && (
            <InviteGuestsStep
              emailToInvite={emailToInvite}
              openGuestsModal={openGuestsModal}
              openConfirmTripModal={openConfirmTripModal}
            />
          )}
        </div>
        {isGuestsOpenModal && (
          <InviteGuestsModal
            emailToInvite={emailToInvite}
            addEmailEnvite={addEmailEnvite}
            closeGuestsModal={closeGuestsModal}
            removeEmailFromInvite={removeEmailFromInvite}
          />
        )}
        {isConfirmTripModalOpen && (
          <ConfirmTripModal
            closeConfirmTripModal={closeConfirmTripModal}
            createTrip={createTrip}
          />
        )}
        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem plann.er você automáticamente concorda <br />
          com nossos
          <a className="text-zinc-300 underline" href="#">
            termos de uso
          </a>
          e
          <a className="text-zinc-300 underline" href="#">
            política de privacidade
          </a>
          .
        </p>
      </div>
    </div>
  )
}
