import { Aside } from './components/Aside'
import Card from './components/Card'
import { Container } from './components/Container'
import { Main } from './components/Main'
import { SearchInput } from './components/SerachInput'
import { Typography } from './components/Typography'

function App() {

  return (
    <div className="bg-neutral-background min-h-screen">
      <Container>
        <Aside />
        <Main>
          <SearchInput name="q" />
          <div>
            <Typography variant='h1'>
              Olá, Vinny!
            </Typography>
            <Typography>
              Veja como estão suas finanças hoje.
            </Typography>
          </div>
          <section>
            <Card>
              <Card.Header>
              Orçamento diário disponível:
              </Card.Header>
              <Card.Body>
                R$200
              </Card.Body>
              <Card.Header>
              Progresso da meta financeira
              </Card.Header>
              <Card.Body>
                R$200
              </Card.Body>
              <Card.Header>
              Movimentação financeira
              </Card.Header>
              <Card.Body>
                R$200
              </Card.Body>
              <Card.Header>
              Minhas contas
              </Card.Header>
              <Card.Body>
                R$200
              </Card.Body>
            </Card>
          </section>
        </Main>
      </Container>
    </div>
  )
}

export default App
