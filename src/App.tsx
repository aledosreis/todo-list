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
    </div>
  )
}