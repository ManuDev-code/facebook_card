import './addPost.css'

// Fake Api
import CurrentUserData from '../../FackApis/CurrentUserData'

// Iconos de FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faSmile, faTags, faVideo } from '@fortawesome/free-solid-svg-icons'

export default function AddPost() {
  return (
    <form className='postForm'>
        <div className="user form-top">
            <img src={CurrentUserData.map(user=>(user.ProfieImage))} alt="" />
            <input type="text" placeholder='¿Qué estás pensando?' />
            <button type='submit' className='btn btn-primary'>Post</button>
        </div>
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

    </form>
  )
}
