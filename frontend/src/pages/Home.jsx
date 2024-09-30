import axios from 'axios'
import { useEffect, useState } from 'react'
import Books from '../components/Books'
import Loader from '../components/Loader'
import { Link } from 'react-router-dom'
import BooksTable from '../components/BooksTable'
import { Button } from '@chakra-ui/react'
import { BsTable } from 'react-icons/bs'
import { PiCardsThreeBold } from 'react-icons/pi'
import { Tooltip } from '@chakra-ui/react'

const Home = () => {
  const [books, setBooks] = useState([])
  const [cardView, setCardView] = useState(true)
  const [loading, setLoading] = useState(false)
  const getBooks = async () => {
    try {
      setLoading(true)
      const { data } = await axios.get('/api/books')
      setBooks(data?.data)
      setLoading(false)
    } catch (error) {
      console.log(`Error in getBooks: ${error}`)
      setLoading(false)
    }
  }
  useEffect(() => {
    getBooks()
  }, [])

  return (
    <>
      <Tooltip
        label={cardView ? 'Table View' : 'Card View'}
        aria-label="A tooltip"
        bg="blackAlpha.600"
      >
        <Button
          onClick={() => setCardView(!cardView)}
          isDisabled={books.length == 0}
          alignSelf="end"
          bg="#372213"
          textColor="#f2f0ef"
          _hover=""
          borderRadius="5px"
          fontWeight="normal"
          className="hover:bg-[#57361f] transition-all"
        >
          {cardView ? <BsTable size="22" /> : <PiCardsThreeBold size="22" />}
        </Button>
      </Tooltip>
      {books?.length == 0 && !loading ? (
        <h1 className="mt-5 text-lg text-black">
          No books found ⚠️{' '}
          <Link to="/add">
            <span
              className="ml-2 cursor-pointer hover:border-b border-black"
              onClick={() => {}}
            >
              Add new book
            </span>
          </Link>
        </h1>
      ) : (
        ''
      )}
      <div className="max-w-[800px] sm:p-3 mt-5">
        {loading ? (
          <Loader />
        ) : cardView ? (
          <Books books={books} />
        ) : (
          <BooksTable books={books} />
        )}
      </div>
    </>
  )
}
export default Home
