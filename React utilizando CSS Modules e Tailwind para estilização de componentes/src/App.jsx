import { Aside } from './components/Aside'
import { Container } from './components/Container'
import { Main } from './components/Main'
import { Searchinput } from './components/SearchInput'

function App() {

  return (
    <Container>
      <Aside />
      <Main>
        <Searchinput />
      </Main>
    </Container>
  )
}

export default App
