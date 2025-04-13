import './feeds.css'
import { Link } from 'react-router-dom'

// Componentes
import Comment from '../comment/Comment'


// Iconos de FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart, faListDots, faShare } from '@fortawesome/free-solid-svg-icons'

// Estados
import { useState } from 'react'

export default function Feed({fed}) {

    // Manipulación de estados
    let [openComment, setOpenComment] = useState(false);

    const commentHandler = () =>{
        setOpenComment(!openComment)
    };

  return (
    <div className='feed' key={fed.userid}>
        <div className="top-content">
            <Link to={'/profile/id'}>
                <div className="user">
                    <img src={fed.feedProfile} alt="" />
                    <div>
                        <h5>{fed.name}</h5>
                        <small>Hace 1 Minuto</small>
                    </div>
                </div>
            </Link>
            <span><FontAwesomeIcon icon={faListDots}/></span>
        </div>
        <div className="mid-content">
            <p>{fed.desc}</p>
            <img src={fed.feedImage} alt="" />
        </div>
        <div className="bottom-content">
            <div className="action-item">
                <span><FontAwesomeIcon icon={faHeart}/> 20 Likes</span>
            </div>
            <div className="action-item" onClick={commentHandler}>
                <span><FontAwesomeIcon icon={faComment}/> 5 Comentarios</span>
            </div>
            <div className="action-item">
                <span><FontAwesomeIcon icon={faShare}/> 3 Compartidos</span>
            </div>
        </div>
        {openComment && <Comment />}
    </div>
  )
}
