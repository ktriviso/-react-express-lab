import React, { Component } from 'react'
import QuotesList from './QuotesList'
import Quote from './Quote'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quotes: [],
      content: '',
      author: '',
      genre: '',
    }
    this.deleteQuote = this.deleteQuote.bind(this)
    this.addQuote = this.addQuote.bind(this)
  }

  componentWillMount() {
    this.getQuotes()
  }

  getQuotes() {
    fetch('./api/quotes')
    .then((data) => data.json())
    .then((quotes) => {
      console.log(quotes)
      this.setState({
        quotes: quotes.data,
      })
    })
    .catch((err) => console.log(err))
  }

  deleteQuote(quoteId) {
    fetch(`/api/quotes/${quoteId}`,  {
      method: 'DELETE',
    })
    .then((res) => {
      if (res.status === 200) {
        this.getQuotes()
      }
    })
  }

  addQuote(e) {
    e.preventDefault()
    fetch(`./api/quotes`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'content': this.content.value,
        'author': this.author.value,
        'genre_type': this.genre_type.value
      })
    })
    .then((res) => {
      if (res.status === 200) {
        this.getQuotes()
      }
    })
  }

  render() {
    return (
      <div>
        <QuotesList
          quotes={this.state.quotes}
          deleteQuote={this.deleteQuote}
        />
        <form onSubmit={this.addQuote}>
          <input ref={(ref) => {this.content = ref}} placeholder='add a quote' type='text' name='content'/>
          <input ref={(ref) => {this.author = ref}} placeholder='author' type='text' name='author'/>
          <input ref={(ref) => {this.genre_type = ref}} placeholder='genre' type='text' name='genre_type'/>
         <button type="Submit">Add a quote!</button>
        </form>
      </div>
    )
  }
}

export default App
