
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ApiProvider } from './components/Contextapi.jsx'

createRoot(document.getElementById('root')).render(
 <ApiProvider>
  
    <App />
    </ApiProvider>

)
