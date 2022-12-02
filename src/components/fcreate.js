import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export function FCreate(props){

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [cover, setCover] = useState('');

    const navigate = useNavigate();

    useEffect(()=>{
        setTitle('');
    },[])

    const handleSubmit = ()=>{
        alert(`${title}` + " " + `${cover}` + " " + `${author}`);

        const newBook = {
            title:title,
            author:author,
            cover:cover
        }
        axios.post('http://localhost:4000/api/books',newBook)
        .then(()=>{
            navigate('/read');
        })
        .catch();
    }

    return(
        <div>
            <h1>Good morning</h1>
            <form onSubmit={handleSubmit}>
                <div>
                <input placeholder="Title" type="text" className="form-control" value={title} onChange={(event)=>{setTitle(event.target.value)}}></input>
                </div>
                <br></br>
                <div>
                <input placeholder="Author" type="text" className="form-control" value={author} onChange={(event)=>{setAuthor(event.target.value)}}></input>
                </div>
                <br></br>
                <div>
                <input placeholder="Cover" type="text" className="form-control" value={cover} onChange={(event)=>{setCover(event.target.value)}}></input>
                </div>
                <br></br>
                <input type="submit" value="Add value"></input>
            </form>
        </div>
    )
}