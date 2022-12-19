import { Repos } from "./components/Repos";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Error } from "./components/Error";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<Repos />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
