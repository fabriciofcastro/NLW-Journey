import { Calendar, DoorClosedIcon, Save, Tag } from 'lucide-react'
import { Button } from '../../components/buttons/Button'

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
            <h2 className="text-lg font-semibold">Cadastrar atividades</h2>
            <Button variant="primary" onClick={closeCreateActiveModal}>
              <DoorClosedIcon className=" text-zinc-900" />
            </Button>
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
          <Button variant="primary" size="full">
            Salva atividade
            <Save />
          </Button>
        </form>
      </div>
    </div>
  )
}
