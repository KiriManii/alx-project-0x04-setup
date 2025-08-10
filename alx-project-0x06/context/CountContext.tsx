import { createContext, useContext, useState, ReactNode } from "react"

// Define the TypeScript interface for the data and functions our context will provide.
interface CountContextProps {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void; // Added reset for completeness, as per previous useState version
}

// Create the Context object. It's initialized with undefined and type-asserted
// to be CountContextProps when used within the provider.
export const CountContext = createContext<CountContextProps | undefined>(undefined);

// The CountProvider component will hold the actual state and provide it to its children.
export const CountProvider = ({ children }: { children: ReactNode}) => {
  // Use useState to manage the count within this provider.
  const [count, setCount] = useState<number>(0);

  // Define the functions to update the count.
  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  const reset = () => setCount(0); // Added reset function

  // The 'value' prop is where we pass the state and functions down to consuming components.
  return (
    <CountContext.Provider value={{ count, increment, decrement, reset }}>
      {children}
    </CountContext.Provider>
  )
}

// Custom hook to easily consume the context in any component.
// It also ensures that the hook is used within a CountProvider.
export const useCount = () => {
  const context = useContext(CountContext);

  if (!context) {
    throw new Error("useCount must be used within a CountProvider");
  }

  return context;
};
