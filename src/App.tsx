import styles from './App.module.scss';
import './styles/global.scss';

import { Header } from './components/Header';

function App() {
  return (
    <>
      <Header />

      <main>
        <article className={styles.wrap}>
          <form action="">
            <input type="text" placeholder='Adicione uma nova tarefa' />
            <button type='submit'>Criar</button>
          </form>

          <div>
            <header>
              <p>Tarefas criadas<span></span></p>
              <p>Concluídas<span></span></p>
            </header>

            <div>
              <img src="" alt="" />
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>

          </div>
        </article>
      </main>
    </>
  )
}

export default App
