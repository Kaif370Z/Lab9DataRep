import React from "react";
import { Books } from "./books";
import axios from "axios";

export class Read extends React.Component {

    //this shpuld refresh the page after deleting a book
    constructor() {
        super();
        this.Reload = this.Reload.bind(this);
    }
    Reload() {
        axios.get('http://localhost:4000/api/books')
            .then(
                (response) => {
                    this.setState({ books: response.data })
                })
            .catch((error) => {
                console.log(error)
            })
    }
    componentDidMount() {
        axios.get('http://localhost:4000/api/books')
            .then(
                (response) => {
                    this.setState({ books: response.data })
                })
            .catch((error) => {
                console.log(error)
            });
    }

    state = {
        books: [

        ]

    }

    render() {
        return (
            <div>
                <h2>Read Component</h2>
                <Books books={this.state.books} Reload={this.Reload}></Books>
            </div>
        );
    }
}