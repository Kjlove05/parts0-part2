import ReactDOM from 'react-dom/client'
import axios from 'axios'
import App from './App'
import './index.css'
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import rootReducer from './reducers/rootReducer'

const store = createStore(rootReducer);

axios.get('api/persons').then(response => {
  ReactDOM.createRoot(document.getElementById('root')).render(
   <Provider store={store}><App persons={response.data} /></Provider>)
})