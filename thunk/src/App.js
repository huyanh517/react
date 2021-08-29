
import { Route, Switch } from 'react-router';
import './App.css';
import { UserDetailPage } from './pages/UserDetailPage';
import { UserListPage } from './pages/UserListPage';

function App() {
  
  return (
    <div className='container'>
      <div className='row'>
        <Switch>

          <Route path='/' exact>
            <UserListPage />
          </Route>

          <Route path='/user/:userName'>
            <UserDetailPage />

          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default App;
