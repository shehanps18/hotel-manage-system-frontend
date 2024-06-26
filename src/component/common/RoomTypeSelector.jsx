import React, { useState, useEffect } from 'react';
import { getRoomTypes } from '../utils/ApiFunctions';

const RoomTypeSelector = ({ handleRoomInputChange, newRoom }) => {
    const [roomTypes, setRoomTypes] = useState([""]);
    const [showRoomTypeInput, setShowRoomTypeInput] = useState(false);
    const [newRoomType, setNewRoomType] = useState("");

    useEffect(() => {
        getRoomTypes().then((data) => {
            setRoomTypes(data);
        });
    }, []);

    const handleNewRoomTypeInputChange = (e) => {
        setNewRoomType(e.target.value);
    };

    const handleAddNewRoomType = () => {
        if (newRoomType !== "") {
            setRoomTypes([...roomTypes, newRoomType])
            setNewRoomType("")
            setShowRoomTypeInput(false)
        }
    }

    return (
        <>
        {roomTypes.length > 0 && (
            <div>
                <select
                    id='roomType'
                    name='roomType'
                    value={newRoom.roomType}
                    onChange={(e)=>{
                        if(e.target.value==="Add new"){
                            setShowRoomTypeInput(true);
                        } else {
                            handleRoomInputChange(e);
                        }
                    }}
                >
                    <option value={""}>Select a room type</option>
                    <option value={"Add new"}>Add new</option>
                    {roomTypes.map((type,index)=>(
                        <option key={index} value={type}>
                            {type}
                        </option>
                    ))}  
                </select>
                {showRoomTypeInput && ( 
                    <div className='input-group'>
                        <input className='form-control' type='text' placeholder='Enter a new room type'
                        onChange={handleNewRoomTypeInputChange} />
                        <button className='btn btn-hotel' type='button' onClick={handleAddNewRoomType}>
                            Add
                        </button>
                    </div>
                )}
            </div>
        )}
        </>
    )
}

export default RoomTypeSelector;
