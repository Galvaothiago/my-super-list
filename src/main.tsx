import ReactDOM from 'react-dom'
import App from './App'
import { AddPurchaseProvide } from './components/context/AddPurchaseContext'
import { GlobalStyle } from './globalStyle'

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <>
    <AddPurchaseProvide>
      <App />
      <GlobalStyle />
    </AddPurchaseProvide>
  </>,
  document.getElementById('root')
)
