import { CircleDotDashed, UserCog } from 'lucide-react'
import { Button } from '../../components/buttons/Button'

export function Guests() {
  return (
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
      <Button variant="secondary" size="full">
        Gerenciar convidados
        <UserCog />
      </Button>
    </div>
  )
}
