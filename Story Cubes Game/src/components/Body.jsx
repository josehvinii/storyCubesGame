import './Body.css';
import SorteioAleatorio from './SorteioAleatorio';

function Body() {
  return (
    <div className='container-body'>
      
      <h1 className='titulo2'>Descubra as cinco imagens e crie sua história!</h1>

      <SorteioAleatorio />
    </div>
  );
}

export default Body;