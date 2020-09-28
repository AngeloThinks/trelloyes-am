import Card from './Card.js'
import React from 'react'
import { render } from '@testing-library/react'

//The List component should render markup matching the design.html: a section with a class of 'List', containing a header and div with class 'List-cards'.
//The List component accepts 2 props: header and cards

class List extends React.Component{
  render() {

      return (<section className="List">
        <div className="List-cards">
        </div>
        </section>);
   }

}




// <section class="List">
// <header class="List-header"></header>