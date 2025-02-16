import './Navbar.css'
import { Icon } from '@iconify/react/dist/iconify.js'

function Navbar() {
  return (
    <div className='container-navbar'>

    <Icon icon="game-icons:dice-six-faces-one" className='dado' />
    <Icon icon="game-icons:dice-six-faces-two" className='dado' />
    <Icon icon="game-icons:dice-six-faces-three" className='dado' />
        
    <h1 className='titulo'>Seja Bem vindo ao Story Cubes!</h1>

    <Icon icon="game-icons:dice-six-faces-four" className='dado' />
    <Icon icon="game-icons:dice-six-faces-five" className='dado' />
    <Icon icon="game-icons:dice-six-faces-six" className='dado' />

    </div>
  )
}

export default Navbar
