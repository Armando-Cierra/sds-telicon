import { createRoot } from 'react-dom/client'
import App from './App'
import '@sipster/core/reset.scss'
import '@sipster/themes/themes.scss'
import './index.scss'

const container = document.getElementById('app') as HTMLAnchorElement
const root = createRoot(container)
root.render(<App />)
