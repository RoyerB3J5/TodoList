
function Item({item, changeItem}) {
  return(
    <li className={`w-full bg-slate-100 flex h-auto py-3 px-4 gap-4 shadow ${item.hecho?'line-through opacity-65':''}`}>
      <input type="checkbox" name="hecho" value={item.hecho} onClick={()=>changeItem(item.id)}/>
      <p>{item.tarea}</p>
    </li>
  )
}

export default Item