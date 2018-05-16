import React, { Component } from 'react'

class Quote extends Component {

render() {
  return (
    <li>
      <h2>{this.props.quote.author}</h2>
      <p>Content: {this.props.quote.content}</p>
      <p>Genre: {this.props.quote.genre_type}</p>
      <button onClick={() => { this.props.deleteQuote(this.props.quote.id)}}>
         Delete Quote
      </button>
    </li>
    )
 }

}

export default Quote
