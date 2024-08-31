// ActionButtons.js
import React from 'react';

const ActionButtons = () => {
  return (
    <div class="flex grid gap-y-6 gap-x-4 grid-cols-3 mt-4">
      <button className='text-2xl p-4 rounded-2xl' style={{background:"#353f4b"}}>Adjust Leverage</button>
      <button className='text-2xl p-4 rounded-2xl' style={{background:"#353f4b"}}>Stop Profit & Loss</button>
      <button className='text-2xl p-4 rounded-2xl' style={{background:"#353f4b"}}>Close Position</button>
    </div>
  );
};

export default ActionButtons;