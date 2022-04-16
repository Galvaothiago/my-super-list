import { Header } from "./components/header"
import { Container, Main } from "./globalStyle"

import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { AddPurchase } from "./pages/addPurchase";


function App() {

  return (
    <Container>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/addPurchase" element={<AddPurchase />} />

        </Routes>
      </Main>
    </Container>
  )
}

export default App
