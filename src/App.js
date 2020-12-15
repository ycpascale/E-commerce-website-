import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarMenu from './Layouts/NavbarMenu';
import Footer from './Layouts/Footer';
import ContactPage from './Components/ContactPage';
import HomePage from './Components/HomePage';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faShoppingCart, faSearch} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-regular-svg-icons';
import { BrowserRouter as Router, Route} from 'react-router-dom'

library.add(fab, faShoppingCart, faSearch, faUser);

function App() {
  return (
    <div>
      <Router>
        <NavbarMenu />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/contact" component={ContactPage} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
