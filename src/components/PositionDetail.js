// PositionDetails.js
import React from 'react';

const PositionDetails = () => {
  return (
    <div class="flex grid gap-y-4 gap-x-6 grid-cols-3 mt-8">
        <div className='flex flex-col'>
            <h1 className='felx text-2xl mb-1' style={{ borderBottom: '1.1px dashed #848b9c', color: '#848b9c' }}>Unrealized PNL (USDT)</h1>
            <h1 className='flex py-2 text-4xl' style={{color:"#4BD4AA"}}>156.89</h1>
        </div>
        <div></div>
        <div className='flex flex-col items-end justify-end'>
            <h1 className='felx text-2xl mb-1' style={{ borderBottom: '1.1px dashed #848b9c', color: '#848b9c' }}>ROI</h1>
            <h1 className='flex py-2 text-4xl' style={{color:"#4BD4AA"}}>+76.31%</h1>
        </div>


        <div className='flex flex-col items-start'>
            <h1 className='felx text-2xl mb-1' style={{ borderBottom: '1.1px dashed #848b9c', color: '#848b9c' }}>Size (USDT)</h1>
            <h1 className='flex py-2 text-2xl' >4112.0</h1>
        </div>
        <div className='flex flex-col '>
            <h1 className='felx text-2xl mb-1' style={{  color: '#848b9c' }}>Margin (USDT)</h1>
            <h1 className='flex py-2 text-2xl' >205.6</h1>
        </div>
        <div className='flex flex-col items-end justify-end '>
            <h1 className='felx text-2xl mb-1' style={{ borderBottom: '1.1px dashed #848b9c', color: '#848b9c' }}>Margin Ratio</h1>
            <h1 className='flex py-2 text-2xl' style={{color:"#4BD4AA"}}>6.2%</h1>
        </div>



        <div className='flex flex-col items-start'>
            <h1 className='inline px-1 text-2xl mb-1' style={{display: 'inline', borderBottom: '1.1px dashed #848b9c', color: '#848b9c' }}>Entry Price (USDT)</h1>
            <h1 className='flex py-2 text-2xl' >0.320400</h1>
        </div>
        <div className='flex flex-col '>
            <h1 className='felx text-2xl mb-1' style={{  color: '#848b9c' }}>Mark Price (USDT)</h1>
            <h1 className='flex py-2 text-2xl'>0.332625</h1>
        </div>
        <div className='flex flex-col items-end justify-end'>
            <h1 className='felx text-2xl mb-1' style={{  color: '#848b9c' }}>Liq. Price (USDT)</h1>
            <h1 className='flex py-2 text-2xl font-bold' >0.230688</h1>
        </div>

        
    </div>
  );
};

export default PositionDetails;