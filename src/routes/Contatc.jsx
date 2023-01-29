import { Link } from "react-router-dom"

const Contatc = () => {
  return (
    <> 
    <h1>Contatc</h1>
    <p>
      <Link to='/contact/1'>Contato 1</Link>
    </p>
    <p>
      <Link to='/contact/2'>Contato 2</Link>
    </p>
    <p>
      <Link to='/contact/3'>Contato 3</Link>
    </p>

    </>
  )
}

export default Contatc