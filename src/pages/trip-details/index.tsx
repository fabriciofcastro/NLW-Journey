import {
  Calendar,
  CircleCheck,
  CircleDotDashed,
  Clock,
  DoorClosedIcon,
  Link2,
  Mail,
  MapPin,
  Plus,
  ReplaceAll,
  Save,
  Settings2,
  Tag,
  UserCog,
} from 'lucide-react'
import { useState } from 'react'
import { ButtonDefault } from '../../components/buttons/ButtonDefault'
import { ButtonZinc } from '../../components/buttons/ButtonZinc'

export function TripDetailsPage() {
  const [isCreateActiveModalOpen, setIsCreateActiveModalOpen] = useState(
    () => false,
  )

  function openCreateActiveModal() {
    setIsCreateActiveModalOpen(() => true)
  }

  function closeCreateActiveMOdal() {
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
          <ButtonZinc text="local/data" Icon={ Settings2 } />
        </div>
      </header>
      <main className="flex gap-16 px-4">
        <div className="flex-1">
          <header className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Atividades</h2>
            <ButtonDefault
              onClick={openCreateActiveModal}
              text="Cadastrar atividade"
              Icon={ReplaceAll}
            />
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
          <div className="space-y-6">
            <h2 className="font-semibold text-xl">Links importantes</h2>
            <div className="space-y-5">
              <div className="flex items-center justify-center gap-4">
                <div className="space-y-1.5 flex-1">
                  <span className="block font-medium text-zinc-100">
                    Reserva do AirBnB
                  </span>
                  <a
                    href="#"
                    className="block text-xs text-zinc-400 truncate hover:text-zinc-200 transition-colors duration-200 ease-linear"
                  >
                    https:/www.airbnb.com.br/rooms/14585221556264616549263497956549631649464
                  </a>
                </div>
                <Link2 className="text-zinc-400 size-5" />
              </div>
              <div className="flex items-center justify-center gap-4">
                <div className="space-y-1.5 flex-1">
                  <span className="block font-medium text-zinc-100">
                    Reserva do AirBnB
                  </span>
                  <a
                    href="#"
                    className="block text-xs text-zinc-400 truncate hover:text-zinc-200 transition-colors duration-200 ease-linear"
                  >
                    https:/www.airbnb.com.br/rooms/14585221556264616549263497956549631649464
                  </a>
                </div>
                <Link2 className="text-zinc-400 size-5" />
              </div>
            </div>
            <ButtonZinc text="Cadastrar no link" Icon={ Plus } width="full" />
          </div>
          <div className="w-full h-px bg-zinc-800" />
          <div>
            <div className="space-y-6">
              <h2 className="font-semibold text-xl">Convidados</h2>
              <div className="space-y-5">
                <div className="flex items-center justify-center gap-4">
                  <div className="space-y-1.5 flex-1">
                    <span className="block font-medium text-zinc-100">
                      Jessica White
                    </span>
                    <span className="block text-sm text-zinc-400 truncate">
                      jessicawhite@gmail.com
                    </span>
                  </div>
                  <CircleDotDashed className="text-zinc-400 size-5" />
                </div>
                <div className="flex items-center justify-center gap-4">
                  <div className="space-y-1.5 flex-1">
                    <span className="block font-medium text-zinc-100">
                      Luciano Silva Machado
                    </span>
                    <span className="block text-sm text-zinc-400 truncate">
                      Lucianosmachado@gmail.com
                    </span>
                  </div>
                  <CircleDotDashed className="text-zinc-400 size-5" />
                </div>
              </div>
              <ButtonZinc
                text="gerenciar convidados"
                Icon={ UserCog }
                width="full"
              />
            </div>
          </div>
        </div>
      </main>
      { isCreateActiveModalOpen && (
        <div className="h-screen bg-black/60 flex flex-col items-center justify-center fixed inset-0">
          <div className="bg-zinc-900 text-zinc-50 w-[640px] rounded-xl py-5 px-6 shadow-shape space-y-5">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">
                  Cadatrar atividades
                </h2>
                <button
                  onClick={ closeCreateActiveMOdal }
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
                    className="bg-transparent flex-1 outline-none"
                    type="email"
                    placeholder="20 de Agosto"
                    name="calendar"
                  />
                </div>
                <div className="flex items-center justify-between gap-2.5  bg-zinc-950 rounded-lg py-2.5 px-4 shadow-shape w-36">
                  <Clock className="size-5" />
                  <input
                    className="bg-transparent flex-1 outline-none"
                    type="email"
                    placeholder="Horário"
                    name="clock"
                  />
                </div>
              </div>
              <ButtonDefault text="Salva atividade" Icon={Save} />
            </form>
          </div>
        </div>
      ) }
    </div>
  )
}
