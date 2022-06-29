import ReactDOM from 'react-dom'
import axios from 'axios'
import App from './App'
import './index.css'

axios.get('http://localhost:3001/persons').then(response => {
  const person = response.data
  ReactDOM.createRoot(document.getElementById('root')).render(
    <App persons={person} />)
})