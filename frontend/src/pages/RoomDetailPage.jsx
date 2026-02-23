import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import roomService from '../services/roomService'

function RoomDetailPage() {
  const { id } = useParams()
  const [room, setRoom] = useState(null)

  useEffect(() => {
    roomService.getById(id).then(response => {
      setRoom(response.data)
    })
  }, [id])

  if (!room) return <p>Loading...</p>

  return (
    <main>
      <h1>{room.name}</h1>
      <img src={room.imageUrl} alt={room.name} width="400" />
      <p>{room.description}</p>
      <p>R$ {room.pricePerNight} per night</p>
      <button disabled>Reserve</button>
    </main>
  )
}

export default RoomDetailPage