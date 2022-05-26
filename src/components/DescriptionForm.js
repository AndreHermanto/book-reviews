import React, {useState} from 'react';
import {Td} from './style';

function DescriptionForm(props){
  const {book, onUpdate} = props;

  const [description, setDescription] = useState(book.description)

  const handleChange= (event) => {
    setDescription(event.target.value)
  }

  return(
    <>
      <Td>
        <input type="text" value={description} onChange={handleChange} />
      </Td>
      <Td>
        <button onClick={() => onUpdate({
          id: book.id,
          description: description
        })}>Update</button>
      </Td>
    </>
  )
}

export default DescriptionForm;