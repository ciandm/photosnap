import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
// pages
import ROUTES from './pages/routes';
import Home from './pages/Home';
import Stories from './pages/Stories';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path={ROUTES.STORIES}>
          <Stories />
        </Route>
        <Route path={ROUTES.FEATURES}>
          <Features />
        </Route>
        <Route path={ROUTES.PRICING}>
          <Pricing />
        </Route>
        <Route exact path={ROUTES.HOME}>
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
