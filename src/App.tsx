import { PlusCircle, Trash } from 'phosphor-react'
import rocketImg from './assets/rocket.svg'
// import clipboardImg from './assets/clipboard.svg'

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

        <div id='task-container'>
          <div className='info'>
            <div className='created'>
              <span>Tarefas criadas</span>
              <span>0</span>
            </div>
            <div className='done'>
              <span>Concluídas</span>
              <span>0</span>
            </div>
          </div>
          {/* <div className='empty'>
            <img src={clipboardImg} alt="clipboard image" />
            <div className='info'>
              <span>Você ainda não tem tarefas cadastradas</span>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          </div> */}
          <div className='tasks'>
            <div className='task'>
              <input type="checkbox" name="" id="" />
              <span>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</span>
              <Trash size={24} />
            </div>
            <div className='task done'>
              <input type="checkbox" name="" id="" />
              <span>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</span>
              <Trash size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}