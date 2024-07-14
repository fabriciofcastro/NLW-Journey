import { Link2, Plus } from 'lucide-react'
import { Button } from '../../components/buttons/Button'

export function ImportantLinks() {
  return (
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
      <Button variant="secondary" size="full">
        Cadastrar no link
        <Plus />
      </Button>
    </div>
  )
}