import React, { useEffect, useState } from "react"

import "./style.css"
import axios from 'axios'


function App() {

  const [dados,setDados] = useState([])
useEffect(()=>{
 

  
  const url = "http://localhost:3001/Users"
  

  axios.get(url)
      .then(response => setDados(response.data))
      // .then(setDados)
      .catch(err => console.log(err))


},[])
  
  console.log(dados);
  

  return (
    <div className="container">
      <div className='row'>
        <div className='col'>
        <table className="table" >
            <thead>
              <tr>
                <th>Usuario</th>
                <th>E-mail</th>
                <th>Cliente</th>
                <th>Perfil de Acesso</th>
                <th>...</th>
              </tr>
            </thead>
              {dados.map((val,key)=>{
                return <tr key={key}>
                  
                    <td>
                    {val.name} 
                    </td>
                    <td>
                    {val.email} 
                    </td>
                    <td>
                    {val.company.name} 
                    </td>
                    <td>
                    {val.username} 
                    </td>
                  
                  
                </tr>
              })}
            <tbody>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default App
