import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
// pages
import ROUTES from './pages/routes';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.HOME}>
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
