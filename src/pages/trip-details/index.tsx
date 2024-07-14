import {
  Calendar,
  CircleCheck,
  MapPin,
  ReplaceAll,
  Settings2,
} from 'lucide-react'
import { useState } from 'react'
import { Button } from '../../components/buttons/Button'
import { CreateActivityModal } from './create-activity-modal'
import { Guests } from './guests'
import { ImportantLinks } from './important-links'

export function TripDetailsPage() {
  const [isCreateActiveModalOpen, setIsCreateActiveModalOpen] = useState(
    () => false,
  )

  function openCreateActiveModal() {
    setIsCreateActiveModalOpen(() => true)
  }

  function closeCreateActiveModal() {
    setIsCreateActiveModalOpen(false)
  }

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <header className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MapPin className="size-5 text-zinc-400" />
          <span className="text-lg text-zinc-100">FLorianópolis, Brasil </span>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <Calendar className="size-5 text-zinc-400" />
            <span className="text-zinc-100"> 17 a 23 de Agosto </span>
          </div>
          <div className="h-6 w-px bg-zinc-800" />
          <Button variant="secondary">
            Alterar data/local
            <Settings2 className="size-5" />
          </Button>
        </div>
      </header>
      <main className="flex gap-16 px-4">
        <div className="flex-1">
          <header className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Atividades</h2>
            <Button onClick={() => openCreateActiveModal}>
              Cadastrar atividade
              <ReplaceAll />
            </Button>
          </header>
          <section className="space-y-8">
            <div className="space-y-2.5">
              <div className="flex gap-2 items-baseline">
                <span className="text-xl text-zinc-300 font-semibold">
                  Dia 27
                </span>
                <span className="text-xs text-zinc-500">Sábado</span>
              </div>
              <p className="text-zinc-500 text-sm">
                Nenhuma atividade cadastrada neste data
              </p>
            </div>

            <div className="space-y-2.5">
              <div className="flex gap-2 items-baseline">
                <span className="text-xl text-zinc-300 font-semibold">
                  Dia 18
                </span>
                <span className="text-xs text-zinc-500">Domingo</span>
              </div>
              <div className="space-y-2.5">
                <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                  <CircleCheck className="size-5 text-lime-300" />
                  <span className="text-zinc-100">Academia em grupo</span>
                  <span className="text-zinc-400 ml-auto">08:00h</span>
                </div>
              </div>
              <div className="space-y-2.5">
                <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                  <CircleCheck className="size-5 text-lime-300" />
                  <span className="text-zinc-100">Academia em grupo</span>
                  <span className="text-zinc-400 ml-auto">08:00h</span>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="w-80 space-y-6">
          <ImportantLinks />
          <div className="w-full h-px bg-zinc-800" />
          <Guests />
        </div>
      </main>
      {isCreateActiveModalOpen && (
        <CreateActivityModal closeCreateActiveModal={closeCreateActiveModal} />
      ) }
    </div>
  )
}
