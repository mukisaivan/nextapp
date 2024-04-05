import { NextResponse } from "next/server"

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos"
const API_KEY = process.env.DATA_API_KEY as string

export async  function GET() {
  const res = await fetch(DATA_SOURCE_URL)

  const todos: Todo[] = await res.json()

  return NextResponse.json(todos)
}



export async function POST(req: Request) {

  const { userId, title }: Partial<Todo> = await req.json()
  
  if (!userId || !title) return NextResponse.json({ "message": "Missing required data" })

  const res = await fetch(DATA_SOURCE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'API-Key': API_KEY
    },
    body: JSON.stringify({userId, title, completed: false})
  })

  const newtodo: Todo[] = await res.json()

  return NextResponse.json(newtodo)
}


export async function PUT(req: Request) {
  const { userId, id, title, completed } = await req.json()

  if (!userId || !id || !title || typeof (completed) !== 'boolean') return NextResponse.json({ "message": "Missing required data" })

  const res = await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'API-Key': API_KEY
    },
    body: JSON.stringify({
      userId, title, completed
    })
  })

  const updatedtodo: Todo = await res.json()

  return NextResponse.json(updatedtodo)
}


export async function DELETE(req: Request) {
  const { id }: Partial<Todo> = await req.json()
  
  if (!id) return NextResponse.json({ "message": "Todo id required" })


  const res = await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'API-Key': API_KEY
    }
  })

  const todos: Todo[] = await res.json()

  return NextResponse.json({'message': `todo ${id} has been deleted`})
}



