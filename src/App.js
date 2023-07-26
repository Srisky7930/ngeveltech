import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import ProductsDetails from './components/ProductsDetails'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/products/:id" component={ProductsDetails} />
    </Switch>
  </BrowserRouter>
)

export default App
