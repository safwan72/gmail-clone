import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Body from '../Body/Home'
import MailComponent from '../Body/MailComponent'

const RouteElement = () => {
  return (
    <Routes>
        <Route path='/' element={<Body/>}/>
        <Route path='mail/:id/' element={<MailComponent/>}/>
    </Routes>
  )
}

export default RouteElement