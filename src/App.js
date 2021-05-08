import {BrowserRouter, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar/NavBar';
import Purchase from './components/Pages/Purchase';
import Home from './components/Pages/Home';

function App() {
  return (
    <section id="todo">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/purchase" component={Purchase} />
        </Switch>
        <NavBar />
      </BrowserRouter>
    </section>
  )
}

export default App;
