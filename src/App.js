import { GlobalStyle } from './styles/global'
import Home from './pages/home'
import Details from './pages/details'
import Footer from './components/footer'
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/details-:id">
          <Details />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
      <GlobalStyle/>
    </Router>
  )
}
