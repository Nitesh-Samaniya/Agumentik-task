import Navbar from "./components/navbar/Navbar";
import { Box } from '@chakra-ui/react'
import Home from "./components/home/Home";

function App() {
  return (
    <Box>
      <Navbar /> 
      <Home />
    </Box>
  );
}

export default App;
