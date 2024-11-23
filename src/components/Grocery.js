import React from 'react'

function Grocery(props) {
    const {businessName}=props;
  return (
    <div className='w-8/12 m-auto h-screen text-center text-2xl p-6 bg-zinc-300'>{businessName}</div>
  )
}

export default Grocery