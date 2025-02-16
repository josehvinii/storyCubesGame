import './SorteioAleatorio.css';
import { Icon } from '@iconify/react/dist/iconify.js'
import { useState } from 'react';

function SorteioAleatorio() {

  const [imagens, setImagens] = useState([]);

  const todasImagens = [
    "game-icons:dragon-head",
    "game-icons:light-bulb",
    "game-icons:treasure-map",
    "game-icons:hourglass",
    "game-icons:rocket",
    "game-icons:scroll-unfurled",
    "game-icons:castle",
    "game-icons:magic-lamp",
    "game-icons:pirate-flag",
  ];

  const sortearImagens = () => {
    const novasImagens = [];
    for (let i = 0; i < 3; i++) { // Sorteia 3 imagens
      const indiceAleatorio = Math.floor(Math.random() * todasImagens.length);
      novasImagens.push(todasImagens[indiceAleatorio]);
    }
    setImagens(novasImagens);
  };

  return (
    <div className='container-sorteioAleatorio'>
      
      <div className='container-livros'>
        <Icon icon="game-icons:archive-register" className='livro' />

        <div className='container-icones'>
          {imagens.map((img, index) => (
            <Icon key={index} icon={img} className='icone' />
          ))}
        </div>

        <Icon icon="game-icons:archive-research" className='livro' />
      </div>

      <button className='sortear' onClick={sortearImagens}>Sortear imagens</button>

    </div>
  )
}

export default SorteioAleatorio
