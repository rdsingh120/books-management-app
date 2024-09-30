import { useDisclosure } from '@chakra-ui/react'
import Modal from './ModalComponent'

const BookCard = ({ book }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div>
      <div
        onClick={onOpen}
        className="w-[150px] h-[220px] object-cover shadow-2xl rounded cursor-pointer hover:scale-105 transition duration-400 overflow-hidden"
      >
        <img src={book.cover} className="" />
      </div>
      <Modal book={book} isOpen={isOpen} onClose={onClose} />
    </div>
  )
}
export default BookCard
