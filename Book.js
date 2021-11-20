// create with rafce

import React from 'react'

const Book = (props) => {
  const { img, title, author } = props.book
  //attribute, eventHandler
  //onClick, onMouseOver
  const clickHandler = (e) => {
    // console.log(e)
    // console.log(e.target)

    alert('Your purchase was successful')
  }
  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(title)
      }}
    >
      <img src={img} alt='' />
      {/*<h1 onClick={()=> console.log(title)}>{title}</h1> */}
      <h1>{title}</h1>
      <h4
        style={{ color: '#617d98', fontSize: 'o.75rem', marginTop: '0.25rem' }}
      >
        {author}
      </h4>
      <button className='buyBtn' type='button' onClick={clickHandler}>
        $Buy
      </button>
    </article>
  )
}

export default Book
//we can have only one default export per file
