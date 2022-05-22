import { Repos } from "./components/Repos";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/github" element={<Repos />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
