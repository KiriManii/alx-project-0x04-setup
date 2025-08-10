import Layout from "@/components/layouts/Layout"; // Assuming this exists and includes Header
import "@/styles/globals.css"; // Global styles are important for Tailwind CSS
import type { AppProps } from "next/app";
import { Provider } from "react-redux"; // Import the Redux Provider
import store from "@/store/store"; // Import our Redux store

export default function App({ Component, pageProps }: AppProps) {
  return (
    // Wrap the entire application with Redux Provider to make Redux state globally available
    <Provider store={store}>
      <Layout> {/* Layout component likely contains the Header */}
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
