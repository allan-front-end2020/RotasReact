import React from 'react'
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
     <nav>
      <Link to='/'>Home</Link>
      <Link to='/contact'>Contatos</Link>
      <Link to='/project'>Projetos</Link>
     </nav>
  )
}
