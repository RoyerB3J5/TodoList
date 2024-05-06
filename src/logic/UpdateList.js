import { useEffect, useState } from 'react'
function useList() {
  const initialItems = JSON.parse(localStorage.getItem('items')) || [{
    id:1,
    tarea:'Terminar la tarea de React',
    hecho:false,
  }]
  const [items, setItems] = useState(initialItems)
  useEffect(()=>{
    localStorage.setItem('items', JSON.stringify(items))
  },[items])

  const changeItem = (id) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, hecho: !item.hecho } : item
    ));
    setTimeout(()=>changeList(id), 500)
  }

  const changeList = (id) =>{
    setItems(items.filter(item => item.id !== id))
  }

  const upItem = (tarea) =>{
    setItems([...items, {id: items.length + 1,tarea, hecho:false}])
  }

  return{
    items,
    changeItem,
    changeList,
    upItem
  }
}

export default useList