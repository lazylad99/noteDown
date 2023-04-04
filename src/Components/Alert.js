import React from "react";

export default function Alert(props) {
  return (
    <div style={{height: '45px'}}>
      {props.alert && <div className={ `alert alert-${props.alert.type} alert-dismissible fade show mb-2`} role="alert">
        {props.alert.message} 
      </div>}
    </div>
  );
}
