import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./pages/Layout";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout />
      </Router>
    </AuthProvider>
  );
}

export default App;
