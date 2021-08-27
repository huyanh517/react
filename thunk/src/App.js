import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actGetDataAsync, actGetDetailAsync } from './actions';
import './App.css';
import { UserList } from './components/UserList';

function App() {
  const dispatch = useDispatch()

  const users = useSelector(state => state.listUsers)

  const [isClick, setIsClick] = useState(false)
  const userDetail = useSelector(state => state.detailUser)

  useEffect(() => {
    dispatch(actGetDataAsync())
  }, [dispatch])

  const handleShowDetail = userName => {
    setIsClick(true)
    dispatch(actGetDetailAsync(userName))
  }
  console.log('userDetail', userDetail)

  return (
    <div className='container'>
      <div className='row'>
        {!isClick ?
          <UserList users={users} handleShowDetail={handleShowDetail} />
          :
          <table className="table mt-5 table-striped table-hover">
            <thead>
              <tr>

              </tr>
            </thead>
            <tbody>
              <tr >
                <th scope="row">{JSON.stringify(userDetail)}</th>
              </tr>

            </tbody>
          </table>}
      </div>
    </div>
  );
}

export default App;
