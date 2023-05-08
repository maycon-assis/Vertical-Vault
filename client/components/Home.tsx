function Home() {
  return (
    <div className="flex flex-col items-center gap-14">
      <h1 className="text-8xl text-gray-600 flex-1">VERTICAL VAULT</h1>
      <form
        action=""
        className="flex flex-col flex-1 w-full border-4 border-gray-600 "
      >
        <input
          className="border border-gray-400 rounded h-16 text-4xl text-center justify-around "
          type="text"
          placeholder="Song Name"
        />
        <input
          className="border border-gray-400 rounded h-16 text-4xl  text-center "
          type="text"
          placeholder="Author"
        />
      </form>
      <div className="flex flex-row  w-full justify-evenly items-center">
        <button className=" font-mono px-5 border-4 h-16 border-blue-950 rounded-2xl bg-blue-400 text-4xl">
          ADD
        </button>
        <img className=" w-24" src="unlock.png" alt="" />
      </div>
    </div>
  )
}

export default Home
