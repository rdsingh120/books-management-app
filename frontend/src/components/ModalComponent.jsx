import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { FcViewDetails } from 'react-icons/fc'
import { MdEditDocument } from 'react-icons/md'
import { BiSolidTrashAlt } from 'react-icons/bi'
import { Tooltip } from '@chakra-ui/react'

const ModalComponent = ({ book, isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay
        bg="blackAlpha.500"
        backdropFilter="blur(10px) hue-rotate(90deg)"
      />
      <ModalContent bg="#f4f1eb" textColor={'black'}>
        <ModalHeader className="text-center">{book.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody className="flex flex-col gap-5 justify-center items-center">
          <img src={book.cover} alt="" className="max-w-[200px] rounded" />
          <div className="flex gap-5 ">
            <Tooltip label="View Book">
              <Link to={`/books/${book._id}`}>
                <Button
                  bg={''}
                  _hover={''}
                  borderRadius=""
                  className="rounded bg-sky-600 hover:bg-sky-800 transition-all"
                >
                  <FcViewDetails size={25} />
                </Button>
              </Link>
            </Tooltip>
            <Tooltip label="Edit Book">
              <Link to={`/edit/${book._id}`}>
                <Button
                  bg={''}
                  color={'black'}
                  _hover={''}
                  borderRadius=""
                  className="rounded bg-yellow-300 hover:bg-yellow-500 transition-all"
                >
                  <MdEditDocument size={25} />
                </Button>
              </Link>
            </Tooltip>
            <Tooltip label="Delete Book">
              <Link to={`/delete/${book._id}`}>
                <Button
                  bg={'red'}
                  color={'white'}
                  _hover={''}
                  borderRadius=""
                  className="rounded hover:bg-red-700 transition-all"
                >
                  <BiSolidTrashAlt size={25} />
                </Button>
              </Link>
            </Tooltip>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            bg="#372213"
            textColor="#f2f0ef"
            _hover=""
            borderRadius="5px"
            fontSize="1.1rem"
            fontWeight="normal"
            className="hover:bg-[#57361f] transition-all"
            onClick={onClose}
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
export default ModalComponent
