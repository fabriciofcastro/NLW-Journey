import { DoorClosedIcon, Mail, User2 } from 'lucide-react'
import { FormEvent } from 'react'

interface ConfirmTripModalProps {
  closeConfirmTripModal: () => void
  createTrip: (e: FormEvent<HTMLFormElement>) => void
}

export function ConfirmTripModal({
  closeConfirmTripModal,
  createTrip,
}: ConfirmTripModalProps) {
  return (
    <div className="h-screen bg-black/60 flex flex-col items-center justify-center fixed inset-0">
      <div className="bg-zinc-900 text-zinc-50 w-[640px] rounded-xl py-5 px-6 shadow-shape space-y-5">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">
              Confirmar criação da viagem
            </h2>
            <button
              onClick={closeConfirmTripModal}
              type="button"
              className="flex gap-2.5  py-1.5 px-2 rounded-lg bg-lime-300 hover:bg-lime-400 transition-colors duration-200"
            >
              <DoorClosedIcon className=" text-zinc-900" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Para concluir a criação da viagem para
            <span className="font-semibold text-zinc-100">
              Florianópolis, Brasil
            </span>
            nas datas de
            <span className="font-semibold text-zinc-100">
              16 a 27 de Agosto de 2024
            </span>
            preencha seus dados abaixo:
          </p>
        </div>
        <div className="h-px w-full bg-zinc-50 opacity-5" />
        <form onSubmit={createTrip} className="space-y-2">
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
  )
}
