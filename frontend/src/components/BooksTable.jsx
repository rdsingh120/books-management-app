import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'

const BooksTable = ({ books }) => {
  return (
    <TableContainer whiteSpace="wrap" textColor={'black'}>
      <Table size="sm">
        <Thead>
          <Tr>
            <Th borderColor="#edf2f7" textColor="#4a5568">
              No.
            </Th>
            <Th borderColor="#edf2f7" textColor="#4a5568">
              Title
            </Th>
            <Th borderColor="#edf2f7" textColor="#4a5568">
              Author
            </Th>
            <Th borderColor="#edf2f7" textColor="#4a5568" isNumeric>
              Year Published
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {books.map((book, i) => (
            <Tr
              key={book._id}
              className="hover:bg-[#f4f1ea] cursor-pointer transition-all duration-200"
            >
              <Td borderColor="#edf2f7">{++i}</Td>
              <Td borderColor="#edf2f7">{book.title}</Td>
              <Td borderColor="#edf2f7">{book.author}</Td>
              <Td borderColor="#edf2f7" isNumeric>
                {book.year}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}
export default BooksTable
