import './feeds.css'
import { Link } from 'react-router-dom'


// Componentes
import Comment from '../comment/Comment'
import Share from './Share'

// Iconos de FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart, faListDots, faShare } from '@fortawesome/free-solid-svg-icons'

// Estados
import { useState, useEffect } from 'react'

export default function Feed({fed}) {

    // Manipulación de estados
    let [openComment, setOpenComment] = useState(false);
    let [contador, setContador] = useState(0)
    let [openShare, setOpenShare] = useState(false);

const shareHandler = () => {
    setOpenShare(!openShare);
};
    const commentHandler = () =>{
        setOpenComment(!openComment)
    };

    useEffect(()=>{
        console.log("Componente cargado por primera vez");
    }, [contador])

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
            <div className="action-item" onClick={()=> {setContador(contador++)
            console.log(contador)}}>
                <span><FontAwesomeIcon icon={faHeart}/> {contador}</span>
            </div>
            <div className="action-item" onClick={commentHandler}>
                <span><FontAwesomeIcon icon={faComment}/> 5 Comentarios</span>
            </div>
            <div className="action-item" onClick={shareHandler}>
            <span><FontAwesomeIcon icon={faShare}/> 3 Compartidos</span>
            </div>
        </div>
        {openShare && <Share fed={fed} />}
        {openComment && <Comment />}
    </div>
  )
}
