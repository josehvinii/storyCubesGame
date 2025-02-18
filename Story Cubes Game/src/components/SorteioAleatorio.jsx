import './SorteioAleatorio.css';
import { Icon } from '@iconify/react/dist/iconify.js'
import { useState } from 'react';

function SorteioAleatorio() {

  const [imagens, setImagens] = useState([]);

  const todasImagens = [
    "game-icons:3d-stairs", "game-icons:alarm-clock", "game-icons:airplane-departure", "game-icons:banknote", "game-icons:bed",
"game-icons:baby-face", "game-icons:bathtub", "game-icons:beach-ball", "game-icons:beech", "game-icons:binoculars",
"game-icons:blunderbuss", "game-icons:bow-tie", "game-icons:brain", "game-icons:brick-wall", "game-icons:briefcase",
"game-icons:bus", "game-icons:burn", "game-icons:capybara", "game-icons:candle-light", "game-icons:cheese-wedge",
"game-icons:cat", "game-icons:chicken", "game-icons:drop", "game-icons:flip-flops", "game-icons:hatchet",
"game-icons:labrador-head", "game-icons:kite", "game-icons:large-paint-brush", "game-icons:microphone", "game-icons:mushroom-cloud",
"game-icons:ninja-head", "game-icons:paint-brush", "game-icons:overdose", "game-icons:pig", "game-icons:pirate-captain",
"game-icons:poison-bottle", "game-icons:pizza-slice", "game-icons:plastic-duck", "game-icons:polo-shirt", "game-icons:popcorn",
"game-icons:power-lightning", "game-icons:punch-blast", "game-icons:retro-controller", "game-icons:smartphone", "game-icons:steam-locomotive",
"game-icons:sunglasses", "game-icons:unlit-bomb", "game-icons:vampire-cape", "game-icons:ufo", "game-icons:umbrella",
"game-icons:witch-face", "game-icons:werewolf", "game-icons:wanted-reward", "game-icons:village", "game-icons:vintage-robot",
"game-icons:tv", "game-icons:talk", "game-icons:spy", "game-icons:strongbox", "game-icons:spiked-dragon-head",
"game-icons:snowing", "game-icons:sofa", "game-icons:slingshot", "game-icons:shopping-cart", "game-icons:scissors",
"game-icons:raining", "game-icons:road", "game-icons:pocket-radio", "game-icons:open-book", "game-icons:locked-chest"
  ];

  const sortearImagens = () => {
    if (imagens.length < 5) {
      let novaImagem;
      do {
        novaImagem = todasImagens[Math.floor(Math.random() * todasImagens.length)]; // Sorteia um ícone aleatório
      } while (imagens.includes(novaImagem));
      
      setImagens([...imagens, novaImagem]);
    } else {
      setImagens([]); // Reinicia os ícones quando chegar no quinto ícone (quando o usuário clicar no botão pela sexta vez)
    }
  };

  return (
    <div className='container-sorteioAleatorio'>
      <div className='container-livros'>
        <Icon icon="game-icons:archive-register" className='livro' />
        
        <div className='container-icones'>

          {imagens.map((img) => ( // "Mapeia" o ícone no array e aparece aqui
            <Icon key={img} icon={img} className='icone-sorteado' /> // Mostra o Ícone na div que está no meio da tela
          ))}

        </div>

        <Icon icon="game-icons:archive-research" className='livro' />
      </div>

      <button className='sortear' onClick={sortearImagens}>Sortear imagem</button>
    </div>
  );
}

export default SorteioAleatorio;