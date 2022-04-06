import React from 'react'

export const Busqueda = ({search,pokemon}) => {

    pokemon.map((e) => {
        console.log(search)
        if(e.name === search){
            // console.log('te encontre')
        }
        else{
            // console.log('no te encontre')
        }
    })
  
    return (
    <div>

       

   
    </div>
  )
}
