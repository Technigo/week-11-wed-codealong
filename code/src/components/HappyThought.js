import React from 'react'
import moment from 'moment' // this is to format the date
import './happyThought.css'

export const HappyThought = ({ thought, onLiked }) => {
  const { message, hearts, createdAt, _id } = thought

  const handleClick = () => {
    fetch(`https://technigo-thoughts.herokuapp.com/${_id}/like`, {
      method: 'POST',
      body: '',
      headers: { 'Content-Type': 'application/json' }
    }).then(() => onLiked(_id))
  }

  return (
    <article className='happy-thought'>
      <h3>{message}</h3>
      <p>
        <button
          onClick={handleClick}
          className={
            hearts > 5 ? 'superLiked' : hearts > 0 ? 'liked' : 'notLiked'
          }
        >
          <span role='img' aria-label='Heart'>
            💜
          </span>
        </button>
        x {hearts}
      </p>
      <p>{moment(createdAt).fromNow()}</p>
    </article>
  )
}
