import { useParams, useNavigate } from "react-router-dom"

export const ContactDetais = () => {
  const {id} =useParams()
  const navigate = useNavigate()
  const handleContact = () =>{
   console.log('xxxxxx')
   return navigate ('/')
  }

  return (
    <div>
      <h1>Exibindo mais informações do contato: {id}</h1>
       <button onClick={handleContact}>Logar</button>
    </div>
  )
}
