import Card from './Card.js'
import React from 'react'
import { render } from '@testing-library/react'

//The List component should render markup matching the design.html: a section with a class of 'List', containing a header and div with class 'List-cards'.
//The List component accepts 2 props: header and cards

class List extends React.Component{
  render(props) {

 props.cards = [{title, content}]   
    for (let i = 0; i < title.length; i++) {
    let card = props.cards[i]
  <Card title={cards.title} content={cards.content}/>

 }

   const tempHeader = (
  <header className="List-header"> 
    <h2>{props.header}</h2> 
  </header>)

  const tempCard = (
    <div class="List-cards"> 
      <div class="Card"> 
        <button type="button">delete</button> 
        <h3>First card</h3> 
        <p>lorem ipsum</p> 
      </div>
    </div>
  }

}
  cards = []

  props.cards = []

  )




  <section class="List"> 
      <header class="List-header"> 
        <h2>Third list</h2> 
      </header> 
            
  </section>

      return (<section className="List">
        <div className="List-cards">
        </div>
        </section>);


   }


}


// The List component accepts 2 props: header and cards.
// header is a string of the header of the card to render.
// cards is an array of card objects. Each object should have a title and content.
// These props will be passed in for each List from the App component.
// props.cards = []



// <section class="List">
// <header class="List-header"></header>