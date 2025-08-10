import Link from "next/link";
import Button from "../common/Button";
import { useRouter } from "next/router"; // Correct hook for Pages Router
import { RootState } from "@/store/store"; // Import RootState type from our Redux store
import { useSelector } from "react-redux"; // Hook to select state from Redux store

const Header: React.FC = () => {
  const router = useRouter(); // Initialize useRouter hook
  const pathname = router.pathname; // Get the current path from useRouter

  // Select the count value from the Redux store state
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <header className="fixed w-full bg-white shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center py-6 px-4 md:px-8">
        <Link href="/" className="text-3xl md:text-5xl font-bold text-gray-800 tracking-tight">
          Splash App
        </Link>

        {/* Button Group / Counter Display */}
        <div className="flex gap-4 items-center">
          {
            // Conditionally render based on the current pathname
            !["/counter-app"].includes(pathname) ? (
              <>
                <Button
                  buttonLabel="Sign In"
                  buttonBackgroundColor="red"
                />
                <Button
                  buttonLabel="Sign Up"
                  buttonBackgroundColor="blue"
                />
              </>
            ) : (
              // Display the current count from the Redux store
              <p className="font-semibold text-lg text-gray-800">Current count : {count}</p>
            )
          }
        </div>
      </div>
    </header>
  );
};

export default Header;
