import React from 'react'

// Páginas
import Login from '../pages/Login/Login';
import Signup from '../pages/signup/signup';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Profile from '../pages/Profile/Profile';
import ChatBox from '../pages/ChatBox/ChatBox';

// Componentes
import Nav from '../components/nav/Nav';
import LeftBar from '../components/leftbar/LeftBar';
import RightBar from '../components/rightbar/RightBar';

export default function LayOut() {

    // Feed
    const Feed = ( ) => {
        return (
            <>
                <Nav />
                <main>
                    <LeftBar/>
                    <div className='container'>
                        <Outlet />
                    </div>
                    <RightBar />
                </main>
            </>
        )
    }

    // Rutas
    const router = createBrowserRouter([
        {
            path: '/',
            element: < Feed />,
            children: [
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: '/profile/:id',
                    element: <Profile />
                },
                {
                    path: '/chatbox/:id',
                    element: <ChatBox />
                },
            ]
        },
        {
            path: '/login',
            element: <Login />
        },

        {
            path: '/signup',
            element: <Signup />
        }
    ])
  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}
