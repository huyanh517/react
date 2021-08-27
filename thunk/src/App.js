import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actGetDataAsync } from './actions';
import './App.css';

function App() {
  const dispatch = useDispatch()

  const users = useSelector(state => state.listUsers)
  
  useEffect(() => {
    dispatch(actGetDataAsync())
  }, [dispatch])
  
  console.log('users', users)
  return (
    <div className='container'>
      <div className='row'>
        {users.map(user => (
          <div key={user.id} className="card col-md-4 p-0" style={{ width: '18rem' }}>
            <img src={user.avatar_url} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{user.login}</h5>
              <p className="card-text">
                {user.type}
              </p>
              <a
                href={user.url}
                className="btn btn-primary"
                rel='noreferrer'
                target='_blank'
              >
                
                {user.url}
              </a>
            </div>
          </div>

        ))}
      </div>
    </div>
  );
}

export default App;
