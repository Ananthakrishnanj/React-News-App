import React, { Component } from 'react';

class Content extends Component {

    render() {        
        return (
                    <div className="col-sm-4">
                        <div className="card"> <img className="img-fluid img" src={this.props.article.urlToImage}></img>
                            <div className="card-body">
                                <div className="news-title">
                                    <h3 className=" title-small">{this.props.article.title}</h3>
                                </div>
                                <p className="card-text"><small className="text-time">{this.props.article.description}</small></p>
                                <a class="btn btn-outline-primary btn-sm" href={this.props.article.url} target="_blank">Read more</a>                                
                            </div>
                        </div>
                    </div>
        );
    }
}

export default Content;