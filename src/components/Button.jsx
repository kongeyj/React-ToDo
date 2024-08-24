import React from 'react'

function Button(props) {
  return (
    <div
      style={
        props.name === props.filter ? { backgroundColor: '#84f4ff' } : null
      }
      onClick={() => {
        props.setfilter(props.name)
      }}
      className=' text-xl text-center
    border-2 border-black  p-1
  '
    >
      {props.name}
    </div>
  )
}

export default Button
