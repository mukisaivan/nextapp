import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

export const revalidate = 0


export default function Home() {
  return (
    <main className=''>

      <div className='p-8'>
        <AddTodo />
        <TodoList />
      </div>
    </main>
  );
}
