import { use, useState } from "react"
import { ChecklistsWrapper } from "./components/ChecklistsWrapper"
import { Container } from "./components/Container"
import { Dialog } from "./components/Dialog"
import { FabButton } from "./components/FabButton"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Heading } from "./components/Heading"
import { IconPlus, IconSchool } from "./components/icons"
import { ToDoItem } from "./components/ToDoItem"
import { ToDoList } from "./components/ToDoList"
import { TextInput } from "./components/TextInput"
import { Button } from "./components/Button"
import { TodoForm } from "./components/ToDoForm"
import { TodoGroup } from "./components/TodoGroup"
import TodoContext from "./components/TodoProvider/TodoContext"

function App() {

  const [showDialog, setShowDialog] = useState(false)
  const { todos, addTodo } = use(TodoContext)

  const toogleDialog = () => {
    setShowDialog(!showDialog)
  }

  const handleFormSubmit = (formData) => {
    addTodo(formData)
    toogleDialog()
  }


  return (
    <main>
      <Container>
        <Header>
          <Heading>
            <IconSchool /> Plano de estudos
          </Heading>
        </Header>
        <ChecklistsWrapper>

          <TodoGroup
            heading="para estudar"
            items={todos.filter(t => !t.completed)}
          />

          <TodoGroup
            heading="Concluido"
            items={todos.filter(t => t.completed)}
          />

          <Footer>
            <Dialog isOpen={showDialog} onCLose={toogleDialog}>
              <TodoForm onSubmit={handleFormSubmit} />
            </Dialog>
            <FabButton onClick={toogleDialog}>
              <IconPlus />
            </FabButton>
          </Footer>
        </ChecklistsWrapper>
      </Container>
    </main>
  )
}

export default App
