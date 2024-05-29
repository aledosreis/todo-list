import { PlusCircle } from 'phosphor-react'
import rocketImg from './assets/rocket.svg'

import './global.css';

export function App() {

  return (
    <div>
      <div id='header'>
        <img src={rocketImg} alt="Desenho de um foguete" />
        <div>
          <span>to</span>
          <span>do</span>
        </div>
      </div>

      <div id="container">
        <form id='new-task'>
          <input type="text" placeholder='Adicione uma nova tarefa' />
          <button>
            Criar
            <PlusCircle size={16} weight='bold' />
          </button>
        </form>
      </div>
    </div>
  )
}