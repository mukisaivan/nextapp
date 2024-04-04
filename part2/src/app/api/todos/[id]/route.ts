import { NextResponse } from "next/server"

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos"


//trying to get a particular todo

export async function GET(req: Request) {

  const id = req.url.slice(req.url.lastIndexOf('/') + 1 )

  const res = await fetch(`${DATA_SOURCE_URL}/${id}`)
  
  const todo = await res.json()
  
  if (!todo.id) return NextResponse.json({ 'message': `${id} does not exist` })
  
  return NextResponse.json(todo)

}