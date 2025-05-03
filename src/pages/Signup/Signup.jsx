import { Link } from 'react-router-dom'
import './signup.css'

export default function signup() {
  return (
    <div className='signup'>
        <div className='card'>
            <div className="left">
                <h2>- <br />MaCaIsYu SignUp<br />-</h2>
                <p>
                    Lorem ipsum
                </p>
                <span>Ya tienes cuenta</span>
                <Link to='/login'>
                    <button className='btn btn-primary'> Login </button>
                </Link>
            </div>
            <form className="right">
                <input type="text" required placeholder='Nombre de Usuario'/>
                <input type="email" required placeholder='Correo'/>
                <input type="password" required placeholder='Contraseña'/>
                <button type='submit' className='btn'> Registrarse </button>
            </form>
        </div>
    </div>
  )
}
