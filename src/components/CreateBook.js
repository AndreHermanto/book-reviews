import React, {useState} from 'react';

function CreateBook(props){
  const { addBook } = props;

  const [book, setBook] = useState({
    title: "",
    description: ""
  });

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    addBook(book)
  }

  return(
    <form onSubmit={onSubmit}>
      <label>Title:
        <input name="title" type="text" value={book.title} onChange={handleChange}></input>
      </label>
      <label>Description:
        <input name="description" type="text" value={book.description} onChange={handleChange}></input>
      </label>
      <input type="submit" value="Add Book"></input>
    </form>
  )
}

export default CreateBook;