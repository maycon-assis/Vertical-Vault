function Home() {
  return (
    <form
      action=""
      className="flex flex-col justify-evenly border-4 border-gray-600 w-1/3 h-56"
    >
      <input
        className="border border-gray-400 rounded text-4xl h-1/3 text-center  "
        type="text"
        placeholder="Song Name"
      />
      <input
        className="border border-gray-400 rounded text-4xl h-1/3 text-center "
        type="text"
        placeholder="Author"
      />
      <button className="bg-green-500 h-1/3  text-white rounded text-lg hover:bg-green-600 focus:bg-green-600">
        Add
      </button>
    </form>
  )
}

export default Home
