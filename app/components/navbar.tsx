export default function Navbar() {
  return (
    <div className="flex flex-row bg-stone-700 w-screen p-8 justify-between">
      <h1 className=" text-2xl">GamesApp</h1>
      <div className="flex gap-4">
        <button className=" bg-red-500 rounded-lg px-3 py-1">
          Register your game
        </button>
        <button className=" bg-green-500 rounded-lg px-3 py-1">Log in</button>
      </div>
    </div>
  );
}
