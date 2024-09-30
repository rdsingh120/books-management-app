import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AddBookForm from './pages/AddBookPage'
import BookDetails from './pages/BookDetails'
import EditBookPage from './pages/EditBookPage'
import DeleteBook from './pages/DeleteBook'
import Footer from './components/Footer'
const App = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-start items-center p-5 max-w-[1200px] min-h-[100vh] bg-[#ffffff] mx-auto pt-[5rem]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddBookForm />} />
          <Route path="/books/:id" element={<BookDetails />} />
          <Route path="/edit/:id" element={<EditBookPage />} />
          <Route path="/delete/:id" element={<DeleteBook />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
