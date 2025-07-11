import React from 'react'

const dummyEvents = [
  { id: '1', title: 'Launch Party', date: '2025-07-20', location: 'Barcelona', price: 0 },
  { id: '2', title: 'Retiro Espiritual', date: '2025-08-10', location: 'Bali', price: 150 },
  { id: '3', title: 'Networking Online', date: '2025-09-01', location: 'Zoom', price: 10 }
]

export default function Events() {
  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Available Events</h2>
      <ul className="space-y-4">
        {dummyEvents.map(event => (
          <li key={event.id} className="border rounded p-4 shadow">
            <h3 className="text-lg font-semibold">{event.title}</h3>
            <p>{event.date} • {event.location}</p>
            <p className="text-sm text-gray-600">Price: {event.price === 0 ? 'Free' : `€${event.price}`}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
