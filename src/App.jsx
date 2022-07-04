import "./App.css";
import { ContextProvider } from "./context/ContextProvider";
import AplicationRoutes from "./routes/index";

function App() {
  return (
    <ContextProvider>
      <AplicationRoutes />
    </ContextProvider>
  );
}

export default App;
