import './Body.css';
import { Icon } from '@iconify/react/dist/iconify.js';

function Body() {
  return (
    <div className='container-body'>

      <div className='container-livros'>
        <Icon icon="game-icons:archive-register" className='livro' />
        <div className='container-icones'></div>
        <Icon icon="game-icons:archive-research" className='livro' />
      </div>

      <button className='sortear'>Sortear imagens</button>

    </div>
  );
}

export default Body;