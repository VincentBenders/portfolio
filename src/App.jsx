import {createBrowserRouter, RouterProvider} from "react-router";
import React, { Children, useState } from 'react'

import Portfolio from './Portfolio'
import Test from './test'
import Layout from "./Layout";

  const router = createBrowserRouter([
    {
      element: <Layout/>,
      children:[
        {
          path: '/',
          element:<Portfolio/>
        },
        {
          path: '/about',
          element:<Test/>
        },
        
      ]
    }
  ])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
