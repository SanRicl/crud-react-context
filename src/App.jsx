import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import ListProducts from "./components/List/ListProducts";
import CreateProducts from "./components/Create/CreateProducts";
import { GlobalProvider } from "./context/GlobalState";
import EditProducts from "./components/Edit/EditProducts";

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Routes>
          <Route path="/" element={<ListProducts />} exact/>
          <Route path="/create" element={<CreateProducts />} exact/>
          <Route path="/edit/:id" element={<EditProducts />} exact/>
        </Routes>
      </GlobalProvider>
    </div>
  );
}

export default App;
