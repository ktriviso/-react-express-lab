import React, { Component } from 'react'
import Quote from './Quote'


class QuotesList extends Component {

  render() {
    return (
      <ul>
        {this.props.quotes.map((quote) => {
          return (
          <Quote
            key={quote.id}
            quote={quote}
            deleteQuote={this.props.deleteQuote}
          />
         )
        })}
      </ul>
    )
  }
}

export default QuotesList

