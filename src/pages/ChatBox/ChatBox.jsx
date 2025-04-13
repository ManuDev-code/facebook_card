import './chatbox.css'

// Componentes
import Stories from '../../components/stories/Stories'

// Fake Apis
import CurrentUserData from '../../FackApis/CurrentUserData'

// Iconos de AwesomeIcons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight, faFileAlt } from '@fortawesome/free-solid-svg-icons'

export default function ChatBox() {
  return (
    <>
      <Stories />
      <div className="chat-box">
        <div className="chat-box-top">
          <img src={CurrentUserData.map(user => (user.ProfieImage))} alt="" />
              <div className="use-name">
                  <h3>{CurrentUserData.map(user =>(user.name))}</h3>
                  <h5>{CurrentUserData.map(user =>(user.username))}</h5>
              </div>
        </div>
        <div className="chat-box-bottom">
          <form action="#">
            <input type="text" placeholder='Escribe algo' />
            <button type='submit' className='btn btn-primary'>
              <FontAwesomeIcon icon={faArrowCircleRight}/>
            </button>
            <label className='btn btn-primary' htmlFor='CFile'>
              <FontAwesomeIcon icon={faFileAlt}/>
              <input type="file" id='CFile'/>
            </label>
          </form>

        </div>
      </div>
    </>
  )
}
