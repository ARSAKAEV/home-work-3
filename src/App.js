import { type } from '@testing-library/user-event/dist/type';
import {useSelector, useDispatch} from 'react-redux';
import Reset from './Reset';

const minusCount = () => {
  return {
    type: 'minus'
  }
}

function App() {

  const dispatch = useDispatch()
  
  const counter = useSelector(state => state)

  const plus = () => {
    dispatch({
      type: 'plus',
      payload: {
        amount: 5
      }
    })
  }

  const minus = () => {
    dispatch(minusCount())
  }


  return (
    <div className='App'>
    {counter}
    <div>
      <button onClick={plus}>
        plus
      </button>
      <Reset/>
      <button onClick={minus}>
        minus
      </button>
    </div>
    </div>
  );
}

export default App;
