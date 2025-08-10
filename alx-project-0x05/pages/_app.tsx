import "@/styles/globals.css"; // Global styles are important for Tailwind CSS
import type { AppProps } from "next/app";
import { CountProvider } from "@/context/CountContext"; // Import our new CountProvider

// We'll need a basic Layout component. Let's assume its existence for now.
// We will create a simple one in the next step if it doesn't exist.
// import Layout from "@/components/layouts/Layout"; // Uncomment if you have a Layout component already

export default function App({ Component, pageProps }: AppProps) {
  return (
    // Wrap the entire application with CountProvider to make count state globally available
    <CountProvider>
      {/* If you have a Layout component, you can wrap Component with it */}
      {/* <Layout> */}
        <Component {...pageProps} />
      {/* </Layout> */}
    </CountProvider>
  );
}
