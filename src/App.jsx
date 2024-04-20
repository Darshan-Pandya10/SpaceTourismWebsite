import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AppLayout from './Pages/AppLayout'
import Home from './Pages/Home'
import Destination from './Pages/Destination'
import Crew from './Pages/Crew'
import Technology from './Pages/Technology'
import ErrorPage from './Pages/ErrorPage'

function App() {

  const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        errorElement: <ErrorPage/>,
        children:[
          {
            index: true,
            element: <Home/>
          },
          {
            path: 'destination',
            element: <Destination/>,
          
          },
          {
            path: 'crew',
            element: <Crew/>
          },
          {
            path: 'technology',
            element: <Technology/>
          }
        ]
    }
  ])

  return (
    <main className='app min-w-screen min-h-screen overflow-hidden'>
      <RouterProvider router={router} />
    </main>
  )
}

export default App
