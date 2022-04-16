import ReactDOM from 'react-dom'
import App from './App'
import { AddPurchaseProvide } from './components/context/AddPurchaseContext'
import { GlobalStyle } from './globalStyle'

import { BrowserRouter } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <>
    <AddPurchaseProvide>
      <BrowserRouter>
        <App />
        <GlobalStyle />
      </BrowserRouter>
    </AddPurchaseProvide>
  </>,
  document.getElementById('root')
)
