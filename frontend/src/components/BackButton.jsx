import { useNavigate } from 'react-router-dom'
import { IoChevronBack } from 'react-icons/io5'
import { Button } from '@chakra-ui/react'

const BackButton = ({ destination = '/' }) => {
  const navigate = useNavigate()
  return (
    <Button
      bg="#372213"
      textColor="#f2f0ef"
      _hover=""
      borderRadius="5px"
      fontSize="1.1rem"
      fontWeight="normal"
      className="hover:bg-[#57361f] transition-all"
      alignSelf="start"
      mb="2rem"
      onClick={() => navigate(destination)}
    >
      <IoChevronBack className="size-6" />
      Back
    </Button>
  )
}
export default BackButton
