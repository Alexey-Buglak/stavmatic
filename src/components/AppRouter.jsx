import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { publicRoutes } from '../assets/routes'

export default function AppRouter() {
  const defRouter = '/' // поменять, если будет логин. Либо поставить страницу-ошибку в element

  return (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route path={path} element={<Component />} key={path} />
      ))}
      <Route path="*" element={<Navigate to={defRouter} />} /> 
    </Routes>
  )
}