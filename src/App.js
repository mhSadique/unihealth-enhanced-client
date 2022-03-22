import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import TopHeader from './components/TopHeader';
import Navbar from './components/Navbar';
import FindDoctor from './pages/FindDoctor';
import MakeAppointment from './pages/MakeAppointment';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import ServiceDetail from './pages/ServiceDetail';
import Context from './Context/Context';
import PrivateRoute from './components/PrivateRoute';
import AdminDashboard from './Admin/AdminDashboard';
import Reviews from './Admin/pages/Reviews';
import Discount from './Admin/pages/Discount';
import Appointments from './Admin/pages/Appointments';
import Doctors from './components/Doctors';
import DoctorsDetails from './pages/DoctorsDetails';

function App() {
  return (
    <Router>
      <TopHeader />
      <Context>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <PrivateRoute exact path="/find-doctor" isToBeNeglected={true}>
            <FindDoctor />
          </PrivateRoute>
          <PrivateRoute exact path="/make-appointment/:doctorId/:feeAmount" isToBeNeglected={true}>
            <MakeAppointment />
          </PrivateRoute>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <PrivateRoute exact path="/service/:id">
            <ServiceDetail />
          </PrivateRoute>
          <PrivateRoute exact path="/admin">
            <AdminDashboard />
          </PrivateRoute>
          <PrivateRoute exact path="/know-more/:id">
            <DoctorsDetails />
          </PrivateRoute>
          <PrivateRoute exact path="/doctors">
            <Doctors />
          </PrivateRoute>
          <PrivateRoute exact path="/reviews">
            <Reviews />
          </PrivateRoute>
          <PrivateRoute exact path="/discount">
            <Discount />
          </PrivateRoute>
          <PrivateRoute exact path="/appointments">
            <Appointments />
          </PrivateRoute>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Context>
      <Footer />
    </Router>
  );
}

export default App;
