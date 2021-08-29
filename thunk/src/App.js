import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router';
import { actGetDataAsync } from './actions';
import './App.css';
import { IconLoading } from './components/IconLoading';
import { UserDetailPage } from './pages/UserDetailPage';
import { UserListPage } from './pages/UserListPage';

function App() {
  const dispatch = useDispatch();

  const [loadingUser, setLoadingUser] = useState(false)

  const users = useSelector(state => state.listUsers)

  const userDetail = useSelector(state => state.detailUser)

  useEffect(() => {
    setLoadingUser(true)

    dispatch(actGetDataAsync())
      .then(() => setLoadingUser(false))
  }, [dispatch])

  console.log('userDetail', userDetail);

  return (
    <div className='container'>
      <div className='row'>
        <Switch>
          {
            !userDetail ?
              (
                loadingUser ?

                  <IconLoading width='80' />
                  :
                  <Route path='/' exact>
                    <UserListPage users={users} />
                  </Route>
              ) :

              <Route path='/user/:userName'>
                <UserDetailPage userDetail={userDetail} />
              </Route>

          }
        </Switch>
      </div>
    </div>
  )
}

export default App;
