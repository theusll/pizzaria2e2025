import{ useState } from "react"


function app(){
  const [nome, setNome] = useState('Ronaldo')
  const [idade, setIdade] = useState(18)
  const [time, setTime] = useState('cr7')
  const [pi] = useState(3.14)

  //var idade = 18;
  //let time = 'cr7'
  //const pi = 3.14

  const Formulario = (props)=>{
    const [valor, setValor] = useState()
    return(
      <div>
<input
  className = "nome" 
  placeholder={props.sombra}
  onChange={(e)=> {setValor(e.target.value)}}
  type="text" 
 />
  

  <button className="botao"  onClick={()=>{ if(valor.length > 0)alert(valor)
    else alert(props.nome + 'idade é ' + props.idade)}}>let's go</button>
  
      </div>
    )
  }

  return(

<div>
  <h3>
    Pizzaria let's go
  
  </h3>
 <Formulario nome="Ricardo" idade={45} sombra= "digite nome..."/>
 <Formulario nome="Maria " sombra= "digite sua idade..."/>
 <Formulario nome="Tomas" sombra= "digite seu time..."/>
 <Formulario nome="Antonieta" sombra= "valor de pi"/>
 
 
 
  




</div>
  
  )

}

export default app