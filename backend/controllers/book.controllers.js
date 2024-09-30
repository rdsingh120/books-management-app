import Book from '../models/book.models.js'

export const getBooks = async (req, res) => {
  try {
    const books = await Book.find({ isDeleted: false })
    return res.status(200).send({
      success: true,
      data: books,
    })
  } catch (error) {
    return res.status(500).json({ success: false, message: 'server error' })
  }
}

export const getBook = async (req, res) => {
  const { id } = req.params
  try {
    const book = await Book.find({ _id: id })
    return res.status(200).send({
      success: true,
      data: book,
    })
  } catch (error) {
    return res.status(500).json({ success: false, message: 'server error' })
  }
}

export const createBook = async (req, res) => {
  const bookData = req.body
  const { title, author, year, cover, description } = bookData
  if (!title || !author || !year || !cover || !description) {
    return res.status(400).json({
      success: false,
      message: 'please complete all the fields',
    })
  }
  try {
    const newBook = new Book(bookData)
    await newBook.save()
    return res.status(201).json({
      success: true,
      message: 'new book added',
    })
  } catch (error) {
    return res.status(500).json({ success: false, message: 'server error' })
  }
}

export const updateBook = async (req, res) => {
  const { id } = req.params
  const bookUpdate = req.body
  try {
    await Book.findByIdAndUpdate(id, bookUpdate)
    return res.status(201).json({
      success: true,
      message: 'book updated',
    })
  } catch (error) {
    return res.status(500).json({ success: false, message: 'server error' })
  }
}

export const deleteBook = async (req, res) => {
  const { id } = req.params
  try {
    await Book.findByIdAndUpdate(id, { isDeleted: true })
    return res.status(200).json({
      success: true,
      message: 'book deleted',
    })
  } catch (error) {
    return res.status(500).json({ success: false, message: 'server error' })
  }
}
