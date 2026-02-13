import { Aside } from './components/Aside'
import { Container } from './components/Container'
import { Main } from './components/Main'
import { Searchinput } from './components/SearchInput'
import { Typography } from './components/Typography'

import Card from './components/Card'
import { DailyBudget } from './components/DailyBudget'
import { SavingStatus } from './components/SavingsStatus'

function App() {

  return (
    <Container>
      <Aside />
      <Main>
        <Searchinput />
        <div>
          <Typography variant="h1">
            Olá, Vinny!
          </Typography>
          <Typography variant="body">
            Veja como estão suas finanças hoje.
          </Typography>
        </div>
        <section>
          <Card>
            <Card.Header>
              Orçamento diário disponível:
            </Card.Header>
            <Card.Body>
              <DailyBudget value={200} />
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              Progresso da meta financeira
            </Card.Header>
            <Card.Body>
              <SavingStatus percent={40} />
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              Orçamento diário disponível:
            </Card.Header>
            <Card.Body>
              R$ 200
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              Orçamento diário disponível:
            </Card.Header>
            <Card.Body>
              R$ 200
            </Card.Body>
          </Card>
        </section>
      </Main>
    </Container>
  )
}

export default App
