import { UseBooks } from "./BookContext";
import {useState} from 'react';
import Create from "./Create";
import Read from "./Read";
import Update from "./Update";
import Delete from "./Delete";



export default function ReadAll(){
    const {books,setBooks} = UseBooks();
    const [create,setCreate] = useState(false);
    const [read, setRead] = useState(false);
    const [update,setUpdate] = useState(false);
    const [deleteBook,setDeleteBook] = useState(false);
    const [id, setId] = useState(0);
  

    const goToCreate = () =>{
        setCreate(true);
        setRead(false);
        setUpdate(false);
        setDeleteBook(false)
    }
    const goToRead = (id) =>{
        setId(id);
        setRead(true);
        setCreate(false);
        setUpdate(false);
        setDeleteBook(false);
    }
    const goToUpdate = (id) =>{
        setId(id);
        setRead(false);
        setCreate(false);
        setUpdate(true);
        setDeleteBook(false);
    }
    const goToDelete = (id) =>{
         setId(id);
        setRead(false);
        setCreate(false);
        setUpdate(false);
        setDeleteBook(true);

    }

    return(
        <>
        <h1>Read ALL</h1>
        <table className='table table-bordered table-striped'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Price</th>
                    <th>Read</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {books.map((book) =>
                <tr>
                    <td>{book.id}</td>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.price}</td>
                    <td><button onClick={()=>goToRead(book.id)}>Read</button></td>
                     <td><button onClick={()=>goToUpdate(book.id)}>Update</button></td>
                      <td><button onClick={()=>goToDelete(book.id)}>Delete</button></td>
                </tr>
            )}
            </tbody>
        </table>
        <button onClick={goToCreate}>Create</button>
                {create &&<Create action={setCreate}/>}
                {read &&<Read id = {id}/>}
                {update &&<Update id = {id} action={setUpdate}/>}
                 {deleteBook &&<Delete id = {id} action={setDeleteBook}/>}
        </>
    )
}
