import React from 'react'

const Input = (props) => {
  return (
    <div className="mb-3">
        <label htmlFor={props.name} className="form-label">
        {props.name}
        </label>
        <input
          type={props.type}
          className="form-control"
          id={props.type}
          ref={props.refV}
          />
      </div>
  )
}

export default Input