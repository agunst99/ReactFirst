import React, { Component } from 'react';
import FormResults from './FormResults';
import styled from 'styled-components';

const SearchInput = styled.input`
    margin-top: 10px;
    width: 250px;
    margin-bottom: 10px;
    padding-left: 10px;
    color: gray;`;

export class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    handleKeyUp() {
        document.getElementById('results').className = 'formResults';
        let val = document.getElementById('searchInput').value;

        if (val === '') {
            document.getElementById('results').className = 'noDisplay';
        }

        const key = 'c7336a7514071652c27a8b5a69632464';

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${val}&page=1&include_adult=false`)
            .then(response => {
                if (response.status !== 200) {
                    console.log('Error: ' + response.status);
                    return;
                }

                response.json().then(data => {
                    const results = data.results;
                    this.setState({ results });
                });
            })

            .catch(err => {
                console.log('Fetch Error :-S', err);
            })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} id="form">
        <SearchInput onKeyUp={this.handleKeyUp} id="searchInput" className="searchBar" type="text" placeholder="Search a movie" required />
        <FormResults results={this.state.results} />
    </form>
        );
    }
}