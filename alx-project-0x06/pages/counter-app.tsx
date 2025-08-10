import { useSelector } from "react-redux"; // Hook to select state from Redux store
import { RootState, useAppDispatch, increment, decrement, reset } from "@/store/store"; // Import types and actions from our Redux store

const CounterApp: React.FC = () => {
  // 1. Select State:
  // useSelector allows us to extract data from the Redux store state.
  // It takes a selector function that receives the entire state and returns the desired part.
  const count = useSelector((state: RootState) => state.counter.value);

  // 2. Get Dispatch Function:
  // useAppDispatch is our typed custom hook for useDispatch, which we use to dispatch actions.
  const dispatch = useAppDispatch();

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-400 to-pink-500 flex flex-col justify-center items-center text-white p-4">
      {/* Title */}
      <h1 className="text-6xl font-extrabold mb-6 text-center">🤖 Fun Counter App 🎉</h1>

      {/* Funny message */}
      <p className="text-lg font-medium mb-4 text-center">
        Current count: {count} {count === 0 ? "🙈 No clicks yet!" : count % 10 === 0 && count !== 0 ? "🔥 You're on fire!" : ""}
      </p>

      {/* Counter Display */}
      <div className="text-6xl font-bold mb-8">
        {count}
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full max-w-sm">
        <button
          onClick={() => dispatch(increment())} // Dispatch the increment action
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg transform hover:scale-105 w-full"
        >
          Increment 🚀
        </button>
        <button
          onClick={() => dispatch(decrement())} // Dispatch the decrement action
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg transform hover:scale-105 w-full"
        >
          Decrement 👎
        </button>
        <button
          onClick={() => dispatch(reset())} // Dispatch the reset action
          className="bg-gray-400 hover:bg-gray-500 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg transform hover:scale-105 w-full"
        >
          Reset 🔄
        </button>
      </div>

      {/* Footer message */}
      <p className="mt-8 text-sm text-white opacity-75 text-center">
        Keep clicking, who knows what happens at 100? 😏
      </p>
    </div>
  );
}

export default CounterApp;
