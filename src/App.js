import './styles/main.scss'
import 'rsuite/dist/styles/rsuite-default.css';
import { Switch } from 'react-router';
import Signin from './pages/Signin';
import Home from './pages/Home';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { ProfileProvider } from './context/profile.context';

function App() {
  return (
      <ProfileProvider>
     <Switch>
      <PublicRoute path="/signin">
        <Signin/>
  
      </PublicRoute>
      <PrivateRoute path="/">
        <Home/>
      </PrivateRoute>
     </Switch>
    </ProfileProvider>

);
      
}

export default App;
