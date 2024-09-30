const Form = ({ input, handleInputState, handleButton, buttonText }) => {
  return (
    <form
      className=" flex flex-col gap-3 w-[100%] text-center p-5"
      onSubmit={handleButton}
    >
      <input
        type="text"
        placeholder="Title"
        className="text-lg p-3 rounded focus:outline-none focus:ring focus:ring-[#79685b]"
        name="title"
        value={input.title}
        onChange={handleInputState}
      />
      <input
        type="text"
        placeholder="Author"
        className="text-lg p-3 rounded focus:outline-none focus:ring focus:ring-[#79685b]"
        name="author"
        value={input.author}
        onChange={handleInputState}
      />
      <input
        type="number"
        placeholder="Publish Year"
        className="text-lg p-3 rounded focus:outline-none focus:ring focus:ring-[#79685b]"
        name="year"
        value={input.year}
        onChange={handleInputState}
      />
      <input
        type="text"
        placeholder="Cover URL"
        className="text-lg p-3 rounded focus:outline-none focus:ring focus:ring-[#79685b]"
        name="cover"
        value={input.cover}
        onChange={handleInputState}
      />
      <textarea
        type="text"
        placeholder="Description"
        className="text-lg p-3 max-h-[250px] min-h-[80px] rounded focus:outline-none overflow-auto focus:ring focus:ring-[#79685b]"
        name="description"
        value={input.description}
        onChange={handleInputState}
      />
      <button
        type="submit"
        className="max-sm:text-lg  text-xl p-3 rounded bg-[#372213] text-[#f2f0ef] hover:bg-[#57361f] transition-all"
      >
        {buttonText}
      </button>
    </form>
  )
}
export default Form
