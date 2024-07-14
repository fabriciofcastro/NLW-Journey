import { Calendar, DoorClosedIcon, Save, Tag } from 'lucide-react'
import { ButtonDefault } from '../../components/buttons/ButtonDefault'

interface CreateActivityModalProps {
  closeCreateActiveModal: () => void
}

export function CreateActivityModal({
  closeCreateActiveModal,
}: CreateActivityModalProps) {
  return (
    <div className="h-screen bg-black/60 flex flex-col items-center justify-center fixed inset-0">
      <div className="bg-zinc-900 text-zinc-50 w-[640px] rounded-xl py-5 px-6 shadow-shape space-y-5">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Cadatrar atividades</h2>
            <button
              onClick={closeCreateActiveModal}
              type="button"
              className="flex gap-2.5  py-1.5 px-2 rounded-lg bg-lime-300 hover:bg-lime-400 transition-colors duration-200"
            >
              <DoorClosedIcon className=" text-zinc-900" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Todos convidados podem visualizar as atividades
          </p>
        </div>
        <div className="h-px w-full bg-zinc-50 opacity-5" />
        <form className="space-y-2">
          <div className="flex items-center justify-between gap-2.5  bg-zinc-950 rounded-lg py-2.5 px-4 shadow-shape">
            <Tag className="size-5" />
            <input
              className="bg-transparent flex-1 outline-none"
              type="text"
              placeholder="Qual a atividade?"
              name="title"
            />
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-between gap-2.5  bg-zinc-950 rounded-lg py-2.5 px-4 shadow-shape flex-1">
              <Calendar className="size-5" />
              <input
                className="bg-transparent flex-1 outline-none "
                type="datetime-local"
                placeholder="20 de Agosto"
                name="accurs_at"
              />
            </div>
          </div>
          <ButtonDefault text="Salva atividade" Icon={Save} />
        </form>
      </div>
    </div>
  )
}
