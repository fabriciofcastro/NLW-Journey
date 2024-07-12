import { AtSign, CirclePlus, DoorClosedIcon, X } from 'lucide-react'
import { FormEvent } from 'react'

interface InviteGuetsModalProps {
  closeGuestsModal: () => void
  addEmailEnvite: (e: FormEvent<HTMLFormElement>) => void
  emailToInvite: string[]
  removeEmailFromInvite: (email: string) => void
}

export function InviteGuestsModal({
  addEmailEnvite,
  closeGuestsModal,
  removeEmailFromInvite,
  emailToInvite,
}: InviteGuetsModalProps) {
  return (
    <div className="h-screen bg-black/60 flex flex-col items-center justify-center fixed inset-0">
      <div className="bg-zinc-900 text-zinc-50 w-[640px] rounded-xl py-5 px-6 shadow-shape space-y-5">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Selecionar convidados</h2>
            <button
              onClick={closeGuestsModal}
              type="button"
              className="flex gap-2.5  py-1.5 px-2 rounded-lg bg-lime-300 hover:bg-lime-400 transition-colors duration-200"
            >
              <DoorClosedIcon className=" text-zinc-900" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Os convidados irão receber e-mails para confirmar a participação na
            viagem.
          </p>
        </div>
        <div className="">
          <div className="flex flex-wrap gap-2">
            {emailToInvite.map((emails) => {
              return (
                <div
                  key={emails}
                  className="py-1.5 px-2.5 rounded-lg bg-zinc-800 flex items-center gap-2"
                >
                  <span className="text-zinc-300">{emails}</span>
                  <button
                    onClick={() => removeEmailFromInvite(emails)}
                    className="hover:text-lime-500 transition-colors duration-200 ease-out"
                  >
                    <X className="size-4 text-zinc- nb" />
                  </button>
                </div>
              )
            })}
          </div>
        </div>
        <div className="h-px w-full bg-zinc-50 opacity-5" />
        <form
          onSubmit={addEmailEnvite}
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
  )
}
