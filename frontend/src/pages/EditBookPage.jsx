import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Loader from '../components/Loader'
import Form from '../components/Form'
import BackButton from '../components/BackButton'
import { useToast } from '@chakra-ui/react'

const EditBookPage = () => {
  const toast = useToast()
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState({
    title: '',
    author: '',
    year: '',
    cover: '',
    description: '',
  })
  const handleInputState = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const navigate = useNavigate()

  const getBook = async () => {
    try {
      setLoading(true)
      const { data } = await axios.get(`/api/books/${id}`)
      setInput(data?.data?.[0])
      setLoading(false)
    } catch (error) {
      console.log(`Error in createBook: ${error}`)
      setLoading(false)
    }
  }

  const updateBook = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const { data } = await axios.put(
        `/api/books/${id}`,
        input
      )

      setLoading(false)
      navigate(`/books/${id}`)
      if (data?.success) {
        toast({
          title: 'Success.',
          description: data?.message,
          status: 'success',
          duration: 2000,
          isClosable: true,
          position: 'top-right',
        })
      }
    } catch (error) {}
  }

  useEffect(() => {
    getBook()
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
      <div className="p-5 rounded-md max-w-[800px] w-[100%] bg-[#f4f1ea]">
        <div className="">
          <h1 className="max-sm:text-3xl my-3 text-5xl text-center text-[#372213]">
            Edit book
          </h1>
          <Form
            input={input}
            handleInputState={handleInputState}
            handleButton={updateBook}
            buttonText="Save Changes"
          />
        </div>
      </div>
    </>
  )
}
export default EditBookPage
