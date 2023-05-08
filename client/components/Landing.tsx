import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div className="flex bg-gray-300 justify-center items-center h-screen">
      <div className="flex flex-col items-center gap-14">
        <h1 className="font-lora text-8xl text-gray-600 flex-1">
          VERTICAL VAULT
        </h1>
        <form
          action=""
          className="flex flex-col flex-1 w-full border-4 font-dm border-gray-600 "
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
          <button className=" font-dm font-bold px-5 border-4 h-16 text-blue-950 border-blue-950 rounded-2xl bg-blue-400 text-4xl">
            ADD
          </button>
          <Link to={'/main'}>
            <img className=" w-24" src="unlock.png" alt="" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Landing
