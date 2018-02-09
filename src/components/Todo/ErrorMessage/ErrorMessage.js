import React from 'react';

export default (props)=>{
  if(!props.message){
    return <span></span>;
  } else {
    return <span className='error'>{props.message}</span>
  }
}
