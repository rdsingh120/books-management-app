import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Loader from '../components/Loader'
import Form from '../components/Form'
import BackButton from '../components/BackButton'
import { useToast } from '@chakra-ui/react'

const AddBookPage = () => {
  const toast = useToast()
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

  const createBook = async (e) => {
    e.preventDefault()
    if (
      !input.title ||
      !input.author ||
      !input.year ||
      !input.cover ||
      !input.description
    ) {
      toast({
        title: 'Error',
        description: 'Please complete all the fields',
        status: 'error',
        duration: 4000,
        isClosable: true,
        position: 'top-right',
      })
      return
    }

    try {
      setLoading(true)
      const { data } = await axios.post(
        'http://localhost:3000/api/books',
        input
      )
      if (data?.success) {
        toast({
          title: 'Success',
          description: data?.message,
          status: 'success',
          duration: 2000,
          isClosable: true,
          position: 'top-right',
        })
      }
      setLoading(false)
      navigate('/')
    } catch (error) {
      console.log(`Error in createBook: ${error}`)
      setLoading(false)
    }
  }
  if (loading)
    return (
      <div className="mt-[3rem]">
        <Loader />
      </div>
    )

  return (
    <>
      <BackButton />
      <div className="p-5 rounded-md max-w-[700px] w-full bg-[#f4f1ea]">
        <div className="">
          <h1 className="max-sm:text-3xl text-[#372213] my-3 text-5xl text-center">
            Create new book
          </h1>
          <Form
            input={input}
            handleInputState={handleInputState}
            handleButton={createBook}
            buttonText={'Create Book'}
          />
        </div>
      </div>
    </>
  )
}
export default AddBookPage
