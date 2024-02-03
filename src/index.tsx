import ReactDOM from 'react-dom/client'
import './index.scss'

import { BrowserRouter } from 'react-router-dom'
import App from './routes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
