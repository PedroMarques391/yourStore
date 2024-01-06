import React from 'react';

function Logo({ color }) {
  return (
    <div className={`${color} text-xl ml-4 font-medium`}>
      Your
      <span className="text-2xl">Store</span>
    </div>
  );
}

export default Logo;
