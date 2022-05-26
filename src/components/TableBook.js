import React from 'react';
import DescriptionForm from './DescriptionForm';
import {Table, Tr, Td} from './style'

const TableBook = (props) => {
  const {books, onDelete, onUpdate} = props;

  return (
    <div>
      <Table>
        <thead>
          <Tr>
            <Td>Title</Td>
            <Td>Description</Td>
            <Td>Update</Td>
            <Td>Delete</Td>
          </Tr>
        </thead>
        <tbody>
          {books.map(book => <Tr key={book.id}>
            <Td>{book.title}</Td>
            <DescriptionForm book={book} onUpdate={onUpdate}></DescriptionForm>
            <Td><button onClick={() => onDelete(book.id)}>Delete</button></Td>
          </Tr>)}
        </tbody>
      </Table>
    </div>
  );
};

export default TableBook;