import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class QuoteText extends React.Component {
    constructor(props){
        super(props);
    };

    render() {
        return (
            <div className="text">
                <h1>{this.props.text}</h1>
            </div>
        )
    }
}

class Author extends React.Component {
    constructor(props){
        super(props);
    };

    render() {
        return (
            <div className="author">
                <span>- {this.props.author}</span>
            </div>
        )
    }
}
  
  class QuoteBox extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            randomIndex: 0,
            quotes: [
                {
                    text: 'helloWorld',
                    author: 'no one'
                }
            ]
        }
    };

    render() {
      return (
        <div className="quote-box">
            <QuoteText text={this.state.quotes[this.state.randomIndex].text}/>
            <Author author={this.state.quotes[this.state.randomIndex].author}/>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <QuoteBox />,
    document.getElementById('root')
  );
  