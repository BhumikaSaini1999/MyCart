import React from 'react'

{/* If functional component then pass state as hooks . If class component then state is in the form of obj*/}
export default function Footer(props) {
  return (
    <div className='row fixed-bottom'>
       <button className='btn btn-danger col-2' onClick={()=>{
        props.resetQuantity();
       }}>Reset</button>
       <div className='col-8 bg-dark text-white text-center'>
          {props.totalAmount}
       </div>
       <button className='btn btn-primary col-2'>Pay Now</button>
    </div>
  )
}
