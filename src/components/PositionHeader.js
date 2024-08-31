// PositionHeader.js
import React from 'react';
import { FaShareAlt } from "react-icons/fa";
const PositionHeader = () => {
  return (
    <div className="flex flex-row items-center">
        <div className='flex gap-6 items-center justify-center'>
            <div className="flex items-center justify-center p-1 w-8 h-8 rounded items-center justify-center" style={{ background: "#2edc9a" }}>
                <h1 className='text-xl font-bold'>B</h1>
            </div>
            <div className="text-3xl font-bold">AIUSDT Perpetual</div>
        </div>
 

        <div className="text-2xl ml-28" style={{color:"#848b9c"}}>
            <span>Cross 20x</span>
        </div>
        <span className='text-3xl ml-8'>
            <span style={{ color: "#4BD4AA" }}>!!</span>
            <span>!!</span>
        </span>
        <div className='ml-auto text-2xl text-gray-600'> <FaShareAlt /></div>
    </div>
  );
};

export default PositionHeader;