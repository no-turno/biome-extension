import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return <ChakraProvider>app</ChakraProvider>;
}

createRoot(document.getElementById("root") as Element).render(<App />);
