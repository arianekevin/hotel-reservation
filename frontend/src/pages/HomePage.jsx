import { useEffect, useState } from 'react'
import roomService from '../services/roomService'
import { Link } from 'react-router-dom'

function HomePage() {
    const [rooms, setRooms] = useState([])

    useEffect(() => {
        roomService.getAll().then(response => {
            console.log(response)
            setRooms(response.data)
        })
    }, [])

    return (
        <div>
            <h1>Available Rooms</h1>
            {rooms.map(room => (
                <div key={room.id}>
                    <Link to={`/rooms/${room.id}`}>
                        <h2>{room.name}</h2>
                    </Link>
                    <p>{room.description}</p>
                    <p>R$ {room.pricePerNight}</p>
                </div>
            ))}
        </div>
    )
}

export default HomePage