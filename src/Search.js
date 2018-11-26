import React, { Component } from 'react';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = { searchword: '' };
        this.changeKeyword = this.changeKeyword.bind(this);
    }

    changeKeyword(e) {
        this.setState({ searchword: e.target.value });
    }

    render() {
        return (
            <div className="search-bar container">
                <input type="text" className="form-control" placeholder="Keyword" onChange={this.changeKeyword} /><br />
                <div className="row">
                    <label className="col-sm-1">Sort by:</label>
                    <select className="form-control col-sm-2">
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.props.click.bind(this, this.state.searchword)}><i className="fa fa-search"></i></button>
            </div>
        );
    }
}

export default Search;
