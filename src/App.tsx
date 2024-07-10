import {
  ArrowRight,
  AtSign,
  Calendar,
  CirclePlus,
  DoorClosedIcon,
  Mail,
  MapPin,
  Settings2,
  User2,
  UserRoundPlus,
  X,
} from 'lucide-react'
import { FormEvent, useState } from 'react'
import logo from '../public/logo.svg'

export function App() {
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

          {isGuestsInputOpen && (
            <div className="bg-zinc-900 p-4 rounded-xl flex items-center shadow-shape gap-2">
              <button
                onClick={ openGuestsModal }
                className="flex items-center gap-2 flex-1 cursor-pointer"
              >
                <UserRoundPlus className="size-5 text-zinc-400" />
                { emailToInvite.length > 0 ? (
                  <>
                    <span className="text-zinc-100 text-lg flex-1 text-start">
                      { `${emailToInvite.length} pessoa(s) convidada(s)` }
                    </span>
                    <button type="button" className="border-solid border border-zinc-600 py-2 px-3 rounded-lg shadow-shape hover:border-zinc-200 transition-colors duration-200 ease-linear ;">Alterar</button>
                  </>
                ) : (
                  <span className="text-zinc-400 text-lg flex-1 text-start"> Adicionar quem estará na viagem? </span>
                ) }
              </button>

              <div className="w-px h-6 bg-zinc-800" />

              <button
                onClick={ openConfirmTripModal }
                type="button"
                className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400 transition-colors ease-linear duration-200"
              >
                Confirmar viagem
                <UserRoundPlus className="size-5" />
              </button>
            </div>
          )}
        </div>

        { isGuestsOpenModal && (
          <div className="h-screen bg-black/60 flex flex-col items-center justify-center fixed inset-0">
            <div className="bg-zinc-900 text-zinc-50 w-[640px] rounded-xl py-5 px-6 shadow-shape space-y-5">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold">
                    Selecionar convidados
                  </h2>
                  <button
                    onClick={ closeGuestsModal }
                    type="button"
                    className="flex gap-2.5  py-1.5 px-2 rounded-lg bg-lime-300 hover:bg-lime-400 transition-colors duration-200"
                  >
                    <DoorClosedIcon className=" text-zinc-900" />
                  </button>
                </div>
                <p className="text-sm text-zinc-400">
                  Os convidados irão receber e-mails para confirmar a
                  participação na viagem.
                </p>
              </div>
              <div className="">
                <div className="flex flex-wrap gap-2">
                  { emailToInvite.map((emails) => {
                    return (
                      <div
                        key={ emails }
                        className="py-1.5 px-2.5 rounded-lg bg-zinc-800 flex items-center gap-2"
                      >
                        <span className="text-zinc-300">{ emails }</span>
                        <button
                          onClick={ () => removeEmailFromInvite(emails) }
                          className="hover:text-lime-500 transition-colors duration-200 ease-out"
                        >
                          <X className="size-4 text-zinc- nb" />
                        </button>
                      </div>
                    )
                  }) }
                </div>
              </div>
              <div className="h-px w-full bg-zinc-50 opacity-5" />
              <form
                onSubmit={ addEmailEnvite }
                className="flex items-center justify-between gap-2.5  bg-zinc-950 rounded-lg py-2.5 px-4"
              >
                <div className="flex items-center gap-2 flex-1">
                  <AtSign />
                  <input
                    className="bg-transparent flex-1 outline-none"
                    type="email"
                    placeholder="Digite o e-mail do convidado"
                    name="email"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-lime-300 text-lime-950 flex rounded-lg font-semibold py-2 px-5 gap-2 flex items-center"
                >
                  Convidar
                  <CirclePlus className="size-5" />
                </button>
              </form>
            </div>
          </div>
        ) }

        { isConfirmTripModalOpen && (
          <div className="h-screen bg-black/60 flex flex-col items-center justify-center fixed inset-0">
            <div className="bg-zinc-900 text-zinc-50 w-[640px] rounded-xl py-5 px-6 shadow-shape space-y-5">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold">
                    Confirmar criação da viagem
                  </h2>
                  <button
                    onClick={ closeConfirmTripModal }
                    type="button"
                    className="flex gap-2.5  py-1.5 px-2 rounded-lg bg-lime-300 hover:bg-lime-400 transition-colors duration-200"
                  >
                    <DoorClosedIcon className=" text-zinc-900" />
                  </button>
                </div>
                <p className="text-sm text-zinc-400">
                  Para concluir a criação da viagem para
                  <span className="font-semibold text-zinc-100">
                    { ' ' }
                    Florianópolis, Brasil{ ' ' }
                  </span>
                  nas datas de
                  <span className="font-semibold text-zinc-100">
                    { ' ' }
                    16 a 27 de Agosto de 2024{ ' ' }
                  </span>
                  preencha seus dados abaixo:
                </p>
              </div>
              <div className="h-px w-full bg-zinc-50 opacity-5" />
              <form onSubmit={ addEmailEnvite } className="space-y-2">
                <div className="flex items-center justify-between gap-2.5  bg-zinc-950 rounded-lg py-2.5 px-4 shadow-shape">
                  <User2 />
                  <input
                    className="bg-transparent flex-1 outline-none"
                    type="text"
                    placeholder="Seu nome completo"
                    name="name"
                  />
                </div>
                <div className="flex items-center justify-between gap-2.5  bg-zinc-950 rounded-lg py-2.5 px-4 shadow-shape">
                  <Mail />
                  <input
                    className="bg-transparent flex-1 outline-none"
                    type="email"
                    placeholder="Seu e-mail pessoal"
                    name="email"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-lime-300 text-lime-950 flex rounded-lg font-semibold py-2 px-5 gap-2 items-center justify-center w-full"
                >
                  Confirmar criação da viagem
                </button>
              </form>
            </div>
          </div>
        ) }
        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem plann.er você automáticamente concorda <br />{ ' ' }
          com nossos
          <a className="text-zinc-300 underline" href="#">
            { ' ' }
            termos de uso
          </a>{ ' ' }
          e{ ' ' }
          <a className="text-zinc-300 underline" href="#">
            política de privacidade
          </a>
          .
        </p>
      </div>
    </div>
  )
}
