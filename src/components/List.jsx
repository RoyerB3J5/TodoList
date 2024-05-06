import React from 'react'
import Item from './Item'
import useList from '../logic/UpdateList'

function List() {
  const {items,upItem,changeItem} = useList()

  const handleClick = (e)=>{
    e.preventDefault()
    const tarea = e.target.tarea.value
    if(tarea !== ''){
      upItem(tarea)
      e.target.reset()
    }
  }
  return (
    <main className='w-full bg-slate-300 h-auto p-5 flex flex-col gap-4 rounded-2xl items-center '>
      
      <form className='flex justify-center items-center' onSubmit={handleClick}>
        <input type="text" className='w-[350px] rounded-tl rounded-bl active:border-none h-9 px-2' placeholder='Ingresa tu tarea...' name='tarea' />
        <button className='bg-red-900 text-white h-9 px-4 rounded-tr rounded-br hover:bg-blue-950 hover:cursor-pointer font-medium transition-all duration-500 focus:outline-none focus:ring-0 focus:shadow-none'type='submit'>Agregar</button>
      </form>
      <section className='w-5/6 flex flex-col gap-2 px-3' >
        <h2 className='text-xl font-medium self-start mt-4'>Tareas pendientes:</h2>
        <hr className='w-full border-t-3 border-blue-950' />
        <ul className='flex flex-col gap-2'>
          {items.map(item => <Item key={item.id} item={item} changeItem={changeItem} />)}
        </ul>   
      </section>
      
    </main>
  )
}

export default List