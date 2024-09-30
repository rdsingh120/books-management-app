import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Loader from '../components/Loader'
import BackButton from '../components/BackButton'
import { useToast } from '@chakra-ui/react'

const DeleteBook = () => {
  const toast = useToast()
  const { id } = useParams()
  const navigate = useNavigate()
  const [bookName, setBookName] = useState('book')
  const [loading, setLoading] = useState(false)
  const getBookName = async () => {
    try {
      setLoading(true)
      const { data } = await axios.get(`/api/books/${id}`)
      setBookName(data?.data?.[0]?.title)
      setLoading(false)
    } catch (error) {
      console.log(`Error in getBookName: ${error}`)
      setLoading(false)
    }
  }
  const deleteBook = async () => {
    try {
      setLoading(true)
      const { data } = await axios.put(
        `/api/books/${id}`,
        { isDeleted: true }
      )
      setLoading(false)
      navigate('/')
      if (data?.success) {
        toast({
          title: 'Success',
          description: 'book deleted',
          status: 'success',
          duration: 2000,
          isClosable: true,
          position: 'top-right',
        })
      }
    } catch (error) {
      console.log(`Error in deleteBook: ${error}`)
      setLoading(false)
    }
  }

  useEffect(() => {
    getBookName()
  }, [])

  if (loading)
    return (
      <div className="mt-[3rem]">
        <Loader />
      </div>
    )

  return (
    <>
      <BackButton />
      <div className="flex flex-col gap-5 max-w-[700px] mx-auto rounded-lg overflow-hidden text-black bg-[#f4f1ea] mt-[3rem] p-8">
        <h1 className="text-3xl">Delete for all eternity?</h1>
        <p className="text-lg">Are you sure you want to delete {bookName}?</p>
        <button
          onClick={deleteBook}
          className="flex justify-center items-center border h-[3rem] px-2 text-xl rounded-md bg-red-600 py-2 text-white hover:bg-red-900 transition-all duration-300"
        >
          Yes, delete it
        </button>
      </div>
    </>
  )
}
export default DeleteBook
