import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import RootLayout from './components/layouts/RootLayout.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AboutUs from './pages/aboutUs/AboutUs.jsx'
import Charater from './pages/character/Character.jsx'
import UserInterface from './pages/userInterface/UserInterface.jsx'
import Story from './pages/story/Story.jsx'
const router = createBrowserRouter([
  {
    path:"/",
    element: <RootLayout/>,
    children:  [
      {
        path: "/",
        element:<App/>
      },
      {
        path: "/story",
        element:<Story/>
      },
      {
        path: "/aboutus",
        element:<AboutUs/>
      },
      {
        path: "/character",
        element:<Charater/>
      },
      {
        path: "/userinterface",
        element:<UserInterface/>
      },
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
