import { ArrowRight, Calendar, MapPin } from 'lucide-react'
import logo from '../public/logo.svg'

export function App() {
  return (
    <div className="flex justify-center items-center  h-screen bg-bgHome bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10 ">
        <div className="flex flex-col items-center gap-3">
          <img src={logo} alt="Logo plann.er" />
          <p className="text-zinc-300 text-lg">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>

        <div className=" bg-zinc-900 p-4 rounded-xl flex items-center shadow-shape gap-2">
          <div className="flex items-center gap-2 flex-1">
            <MapPin className="size-5 text-zinc-400" />
            <input
              type="text"
              placeholder="Para onde você vai?"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none"
            />
          </div>
          <div className="flex items-center gap-2 flex-1">
            <Calendar className="size-5 text-zinc-400" />
            <input
              type="text"
              placeholder="Quando?"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none"
            />
          </div>

          <div className="w-px h-6 bg-zinc-800" />

          <button className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400 transition-colors ease-linear duration-200 ">
            Continuar
            <ArrowRight className="size-5" />
          </button>
        </div>
        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem plann.er você automáticamente concorda <br />{' '}
          com nossos
          <a className="text-zinc-300 underline" href="#">
            {' '}
            termos de uso
          </a>{' '}
          e{' '}
          <a className="text-zinc-300 underline" href="#">
            política de privacidade
          </a>
          .
        </p>
      </div>
    </div>
  )
}
