import {useSelector, useDispatch} from 'react-redux';

function Reset() {
    const dispatch = useDispatch()

    const reset = () => {   
        dispatch({
            type: 'reset'
        })
    }

    return (
        <button onClick={reset}>
            reset
        </button>
    )
}

export default Reset;