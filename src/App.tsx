import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "@/Components/Layout";
import HomePage from "@/Page/Homepage";
import Waiter from "@/Page/Footer/Waiter";
import Promotion from "@/Page/Footer/Promotion";
import ExampleTablesPage from "@/Page/ExampleTablesPage";
import TablePageTob from "@/Page/TablesPagebyTob";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/promotion" element={<Promotion />} />
          <Route path="/waiter" element={<Waiter />} />
          <Route path="/tables" element={<ExampleTablesPage />} />
          <Route path="/tables2" element={<TablePageTob />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
