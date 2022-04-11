import { Header } from "./components/header"
import { Home } from "./components/pages/home"
import { Container, Main } from "./globalStyle"

function App() {

  return (
    <Container>
      <Header />
      <Main>
        <Home />
      </Main>
    </Container>
  )
}

export default App
