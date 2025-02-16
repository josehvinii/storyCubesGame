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
    "game-icons:chess-knight",
    "game-icons:feather",
    "game-icons:fire",
    "game-icons:skull",
    "game-icons:anchor",
    "game-icons:moai",
    "game-icons:robot",
    "game-icons:spy",
    "game-icons:coffee-cup",
    "game-icons:crown",
    "game-icons:ghost",
    "game-icons:heart",
    "game-icons:key",
    "game-icons:medal",
    "game-icons:moon",
    "game-icons:orbital",
    "game-icons:plant",
    "game-icons:puzzle-piece",
    "game-icons:shuriken",
    "game-icons:shield",
    "game-icons:skull-crossbones",
    "game-icons:snowflake",
    "game-icons:sun",
    "game-icons:sword",
    "game-icons:tower",
    "game-icons:ufo",
    "game-icons:umbrella",
    "game-icons:viking-helmet",
    "game-icons:wrench",
    "game-icons:yin-yang",
    "game-icons:crystal-ball",
    "game-icons:griffin-symbol",
    "game-icons:dragonfly",
    "game-icons:hourglass",
    "game-icons:scroll",
    "game-icons:crab",
    "game-icons:musical-notes",
    "game-icons:compass",
    "game-icons:mask",
    "game-icons:anubis",
    "game-icons:zeppelin",
    "game-icons:candle",
    "game-icons:quill",
    "game-icons:thunderbolt",
    "game-icons:wolf-head",
    "game-icons:phoenix",
    "game-icons:water-drop",
    "game-icons:ancient-sword",
    "game-icons:tentacle",
    "game-icons:griffin",
    "game-icons:magic-swirl",
    "game-icons:anvil",
    "game-icons:laser-blast",
    "game-icons:eyeball",
    "game-icons:robot-antennas",
    "game-icons:witch-hat",
    "game-icons:evil-moon",
    "game-icons:fireball",
    "game-icons:exploding-planet",
    "game-icons:chimney",
    "game-icons:crystal-shine",
    "game-icons:bat",
    "game-icons:skull-ring",

  ];

  const sortearImagens = () => {
    const novasImagens = [];
    for (let i = 0; i < 9; i++) { // Sorteia as imagens
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
            <Icon key={index} icon={img} className='iconesSorteados' /> // Ícones que estão no array e serão sorteados
          ))}
        </div>

        <Icon icon="game-icons:archive-research" className='livro' />
      </div>

      <button className='sortear' onClick={sortearImagens}>Sortear imagens</button>

    </div>
  )
}

export default SorteioAleatorio
