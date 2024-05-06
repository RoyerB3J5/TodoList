import { RiTodoFill } from "react-icons/ri";
function Header() {
  return (
    <header className='flex justify-center items-center gap-4'>
      <h1 className='text-4xl font-medium text-blue-950'>ToDo List</h1>
      <RiTodoFill className="text-4xl text-red-900" />
    </header>
  )
}

export default Header