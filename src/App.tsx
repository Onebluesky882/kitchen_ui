import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "@/Components/Layout";
import HomePage from "@/Page/Homepage";
import Waiter from "@/Page/Footer/Waiter";
import Promotion from "@/Page/Footer/Promotion";
import ExampleTablesPage from "@/Page/ExampleTablesPage";
import { TablesV2 } from "./Page/TablesV2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/promotion" element={<Promotion />} />
          <Route path="/waiter" element={<Waiter />} />
          <Route path="/tables" element={<ExampleTablesPage />} />
          <Route path="/tablesv2" element={<TablesV2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
