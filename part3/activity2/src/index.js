import ReactDOM from 'react-dom/client'
import axios from 'axios'
import App from './App'
import './index.css'

axios.get('api/persons').then(response => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <App persons={response.data} />)
})