import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import InstructionsModal from './components/instructions-modal.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <InstructionsModal />
    <App />
  </>
)
