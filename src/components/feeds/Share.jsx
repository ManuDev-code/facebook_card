import './share.css';
import Feed from './Feed';
// Iconos de FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faSmile, faTags, faVideo } from '@fortawesome/free-solid-svg-icons'


export default function Share({ fed }) {
    
    return (
      <div className="share-popup">
        <h4>Compartir esta publicación</h4>
        <p>Selecciona cómo quieres compartir:</p>
  
        <select className="share-dropdown">
          <option value="grupo">Grupo</option>
          <option value="individual">Mensaje</option>
          <option value="individual">Whatsapp</option>
        </select>
        <input
          type="text"
          className="share-input"
          placeholder="Agrega una descripción..."
        />
        <div className="sharedimages">
        <img src={fed.feedImage} alt="Publicación" />
         </div>
         <br />
        
        <div className="Opciones">
            <div className="post-categories">
            <label htmlFor="file">
                <input type="file" id='file'/>
                <span> <FontAwesomeIcon icon={faImage}/> Foto </span>
            </label>
            <label htmlFor="file">
                <input type="file" id='file'/>
                <span> <FontAwesomeIcon icon={faVideo}/> Video </span>
            </label>
            <span> <FontAwesomeIcon icon={faTags}/> Tags </span>
            <span> <FontAwesomeIcon icon={faSmile}/> Sentimientos </span>
        </div>
        </div>
        <div className="btns">
        <button type='submit' className='btn btn-primary' id='btnCancelar'>Cancelar</button>
        <button type='submit' className='btn btn-primary'>Compartir</button>
        </div>
      </div>

    );
  
}