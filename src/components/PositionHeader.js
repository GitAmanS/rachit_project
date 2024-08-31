// PositionHeader.js
import React from 'react';
import { FaShareAlt } from "react-icons/fa";
const PositionHeader = () => {
  return (
    <div className="flex flex-row items-center">
        <div className='flex gap-3 items-center justify-center'>
            <div className="flex items-center justify-center p-1 w-8 h-8 rounded items-center justify-center" style={{ background: "#2edc9a" }}>
                <h1 className='text-xl font-bold'>B</h1>
            </div>
            <div className="text-3xl font-bold">AIUSDT</div>
        </div>
 

        <div className="text-xl text-gray-300" >
            <span className='mx-2 p-1 rounded' style={{background:"#29323b"}}>Perp</span> 
            <span className='p-1 rounded' style={{background:"#29323b"}}>Cross 20x</span>
        </div>
        <span className='text-3xl ml-1' >
            <span style={{ color: "#4BD4AA" }}>!!</span>
            <span>!!</span>
        </span>
        <div className='ml-auto text-2xl text-gray-600'> <FaShareAlt /></div>
    </div>
  );
};

export default PositionHeader;