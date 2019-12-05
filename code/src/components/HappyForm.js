import React, { useState } from "react"
import "./happyForm.css"

export const HappyForm = props => {
  const [message, setMessage] = useState("")

  const handleSubmit = event => {
    event.preventDefault()
    props.onFormSubmit(message) // this onFormSubmit comes as a props from App.js
  }

  return (
    <form className='happy-form'>
      <h3>Post a happy thought!</h3>
      <textarea
        rows='3'
        onChange={event => setMessage(event.target.value)}
      ></textarea>
      <div className='form-footer'>
        <button
          type='submit'
          onClick={handleSubmit}
          disabled={message.length < 6 || message.length > 140 ? true : false}
        >
          Send a happy thought
        </button>
        <p>{message.length} / 140</p>
      </div>
    </form>
  )
}
