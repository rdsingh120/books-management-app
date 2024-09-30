import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="bg-[#f4f1ea] fixed w-full z-20">
      <div className="max-w-[1350px] mx-auto h-[60px] px-5 flex justify-between items-center">
        <Link to={'/'}>
          <h1 className="text-3xl text-[#372213]">
            <span className="font-extralight">books</span>app
          </h1>
        </Link>
        <Link to="/add">
          <button className="font-normal rounded px-3 py-1 bg-[#372213] text-[#f2f0ef] hover:bg-[#57361f] transition-all">
            Add Book
          </button>
        </Link>
      </div>
    </div>
  )
}
export default Navbar
