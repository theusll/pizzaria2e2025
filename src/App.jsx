import{ useState } from "react"


function app(){
  const [nome, setNome] = useState('Ronaldo')

  const Formulario = ()=>{
    return(
      <div>
<input
  className = "nome" 
  onChange={(e)=> {setNome(e.target.value)}}
  type="text" 
 />
  

  <button className="botao"  onClick={()=>{alert(nome)}}>let's go</button>
      </div>
    )
  }

  return(

<div>
  <h3>
    Pizzaria let's go
  
  </h3>
 <Formulario/>
 <Formulario/>
 
 
  




</div>
  
  )

}

export default app