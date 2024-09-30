import BookCard from './BookCard'
import { SimpleGrid } from '@chakra-ui/react'

const Books = ({ books }) => {
  return (
    <SimpleGrid
      columns={{
        base: 2,
        sm: 3,
        md: 4,
        lg: 5,
      }}
      spacing={10}
      w={'full'}
    >
      {books.map((book) => (
        <BookCard book={book} key={book._id} />
      ))}
    </SimpleGrid>
  )
}
export default Books
