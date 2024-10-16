import { useState } from 'react'


function FullCV({name, title, objective}) {
  
  return (
    <>
       <div>
        <h1>{name}</h1>
        <h2>{title}</h2>
        <p>{objective}</p>
      </div>

    </>
  )
  }

export default FullCV
