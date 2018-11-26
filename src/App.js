import React, { Component } from 'react';
import Search from './Search';
import './App.css';
import './Content';
import Content from './Content';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { news: {} }
    this.search = this.search.bind(this);
  }

  search(keyword, event) {
    var url = 'https://newsapi.org/v2/everything?' +
      'q=' + keyword + '&' +
      'apiKey=02cf1f5352624a30b2750c1b1c11843e';
    var req = new Request(url);

    fetch(req)
      .then(function (response) {
        return response.json();
      })
      .then(news => { this.setState({ news: news.articles }) })
  }

  render() {
    return (
      <div className="App">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">NEWS APP</h1>
            <p className="lead">Search news by keywords</p>
          </div>
        </div>
        <Search click={this.search} />
        <div className="content">
          <div className="row">
            {this.state.news.length > 0 ? this.state.news.map((article, index) => <Content article={article} key={index} />) : true}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
