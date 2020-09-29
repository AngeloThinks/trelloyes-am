import Card from './Card.js'
import React from 'react'
import { render } from '@testing-library/react'
import './List.css'

//The List component should render markup matching the design.html: a section with a class of 'List', containing a header and div with class 'List-cards'.
//The List component accepts 2 props: header and cards

export default function List(props){
  return (
    <section className='List'>
      <header className='List-header'>
  <h2>{props.header}</h2>
      </header>
      <div className='List-cards'>
        {props.cards.map((card) =>
          <card
            key={card.id}
            title={card.title}
            content={card.content}
            />
        )}
        <button
          type='button'
          className='List-add-button'
          >
            + Add Random Card
          </button>
      </div>
    </section>
  )
}    




// The List component accepts 2 props: header and cards.
// header is a string of the header of the card to render.
// cards is an array of card objects. Each object should have a title and content.
// These props will be passed in for each List from the App component.
// props.cards = []



// <section class="List">
// <header class="List-header"></header>