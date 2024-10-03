import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../components/Loader'
import BackButton from '../components/BackButton'
import { Tooltip } from '@chakra-ui/react'

const BookDetails = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [book, setBook] = useState({})
  const [readMore, setReadMore] = useState(false)
  const getBook = async () => {
    try {
      setLoading(true)
      const { data } = await axios.get(`/api/books/${id}`)
      setBook(data?.data?.[0])
      setLoading(false)
    } catch (error) {
      console.log(`Error in getBook: ${error}`)
      setLoading(false)
    }
  }
  useEffect(() => {
    getBook()
  }, [])

  if (loading) return <Loader />
  return (
    <>
      <BackButton />
      <div className="flex flex-wrap justify-center items-start gap-10">
        <div className="w-[300px] object-cover rounded-r-3xl shadow-2xl  cursor-pointer hover:scale-105 transition duration-400 overflow-hidden">
          <img src={book.cover} alt={book.title} className="w-full" />
        </div>
        <div className="flex flex-col gap-5 max-w-[500px]">
          <span className="text-xl italic text-[#b3a49d]">#{book._id}</span>
          <Tooltip label={book?.title} aria-label="A tooltip">
            <h1 className="text-5xl font-serif text-black">
              {book?.title}
            </h1>
          </Tooltip>
          <h3 className="text-3xl font-serif text-black">
            By
            <span className="text-red-500"> {book.author}</span>
          </h3>
          <span className="text-2xl font-serif text-black">
            First Published in {book.year}
          </span>
          <p className="text-lg text-black">
            {readMore
              ? book?.description
              : book?.description?.substring(0, 299) + '... '}
            <button
              onClick={() => setReadMore(!readMore)}
              className="hover:underline font-bold text-black"
            >
              {readMore ? 'Show less' : 'Read more'}
            </button>
          </p>
        </div>
      </div>
    </>
  )
}
export default BookDetails
