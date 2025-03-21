import{ useState } from "react"


function app(){
  const [nome, setNome] = useState('Ronaldo')

  return(

<div>
  <h3>
    Pizzaria let's go
  
  </h3>
 
  <input
  className = "nome" 
  onChange={(e)=> {setNome(e.target.value)}}
  type="text" 
 />
  

  <button className="botao"  onClick={()=>{alert(nome)}}>let's go</button>




</div>
  
  )

}

export default app