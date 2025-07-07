import { Contato, Header, Navbar, OutrosProjetos, Projetos, Qualificacoes, Sobre } from './sections';
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Sobre />
      <Qualificacoes />
      <Projetos />
      <OutrosProjetos />
      <Contato />
    </div>
  )
}

export default App
