import Link from "next/link";
import Button from "../common/Button"; // Relative path to Button component
import { useRouter } from "next/router"; // Correct hook for Pages Router
import { useCount } from "@/context/CountContext"; // Import our custom useCount hook

const Header: React.FC = () => {
  const router = useRouter(); // Initialize useRouter hook
  const pathname = router.pathname; // Get the current path from useRouter

  const { count } = useCount(); // Consume the count from our Context API

  return (
    <header className="fixed w-full bg-white shadow-md z-10"> {/* Added z-10 for layering */}
      <div className="container mx-auto flex justify-between items-center py-6 px-4 md:px-8">
        <Link href="/" className="text-3xl md:text-5xl font-bold text-gray-800 tracking-tight">
          Splash App
        </Link>

        {/* Button Group / Counter Display */}
        <div className="flex gap-4 items-center"> {/* Added items-center for vertical alignment */}
          {
            // Conditionally render based on the current pathname
            // If not on the /counter-app page, show Sign In/Sign Up buttons
            // Otherwise, show the current count from the global state
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
              // Display the current count from the Context API
              <p className="font-semibold text-lg text-gray-800">Current count : {count}</p>
            )
          }
        </div>
      </div>
    </header>
  );
};

export default Header;
