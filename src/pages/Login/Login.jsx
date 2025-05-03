import { Link } from 'react-router-dom'
import './login.css'

export default function login() {
  return (
    <div className='login'>
        <div className='card'>
            <div className="left">
                <h2> - <br />MaCaIsYu <br />-</h2>
                <p>
                    Lorem ipsum
                </p>
                <span>¿No tienes cuenta?</span>
                <Link to='/signup'>
                    <button className='btn btn-primary'> Registrarse </button>
                </Link>
            </div>
            <form className="right">
                <input type="text" required placeholder='Nombre de Usuario'/>
                <input type="password" required placeholder='Contraseña'/>
                <button type='submit' className='btn'> Login </button>
            </form>
        </div>
    </div>
  )
}
