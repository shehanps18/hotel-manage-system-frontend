import { useState } from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import './App.css'
import AddRoom from './component/room/AddRoom.jsx'
import RoomTypeSelector from './component/common/RoomTypeSelector.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddRoom />
      


    </>
  )
}

export default App
