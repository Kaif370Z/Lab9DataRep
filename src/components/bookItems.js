import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import axios, { Axios } from "axios";
//import { Button } from "bootstrap";

export class BookItems extends React.Component {

    //deleting a book from the read page
    constructor(){
        super();
        this.DeleteBook = this.DeleteBook.bind(this);
    }
    DeleteBook(e){
        e.preventDefault();

        axios.delete('http://localhost:4000/api/book/'+this.props.book._id)
        .then((res)=>{this.props.Reload();})
        .catch();
    }
    render() {
        return (
            <div>
                <Card>
                    <Card.Header>{this.props.book.title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.book.cover}></img>
                            <footer className="blockquote mb-0">
                                {this.props.book.author}
                            </footer>
                        </blockquote>
                    </Card.Body>
                <Link to={'/edit/'+this.props.book._id} className='btn btn-primary'>Edit</Link>
                <Button variant="danger" onClick={this.DeleteBook}>Delete</Button>
                </Card>
            </div>
        );
    }
}