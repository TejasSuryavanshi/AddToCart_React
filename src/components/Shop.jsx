import React from 'react'
import list from '../list'
import Card from './Card'

function Shop({handleClick}) {
  return (
    <section>
        {
            list.map((item)=>{
                //as a prop karyu che 
                return <Card item={item} key={item.id} handleClick={handleClick}/>
            })
        }
    </section>
  )
}

export default Shop