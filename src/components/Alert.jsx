import React from 'react'
import {Alert} from 'react-bootstrap'
const AlertBar = (props) => {
    console.log("adsfzsd",props);
  return (
   
        <Alert key={props.alert.key} variant={props.alert.variant} className="my-2">
        {props.alert.message} 
      </Alert>
   
        
    
  )
}

export default AlertBar