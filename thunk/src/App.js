import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actGetDataAsync } from './actions';
import './App.css';
import { IconLoading } from './components/IconLoading';
import { UserDetail } from './components/UserDetail';
import { UserList } from './components/UserList';

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
        {
          !userDetail ?
          loadingUser ? <IconLoading width='80' /> : <UserList users={users} />
          :
          <UserDetail userDetail={userDetail} />
        }
      </div>
    </div>
  );
}

export default App;
