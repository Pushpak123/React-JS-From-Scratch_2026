import {useDispatch,useSelector} from 'react-redux';
import { action1, balanceChange, incrementBalance } from './testSlice';
import { decrement, increment, incrementByAmount } from './counterSlice';
export default function SecondComponent(){
    const dispatch = useDispatch();
   const count = useSelector((state) => state.counter.value);
    const balance = useSelector((state) => state.balance.value);
    return(
        <>
                <div>
        <h3>Counter Component</h3>
        Count: {count}, balance: {balance} <br />
        For Balance:
        <button onClick={() => dispatch(balanceChange(5))}>change balance</button>
        <button onClick={() => dispatch(incrementBalance())}>increment balance</button>
        <button onClick={() => dispatch(action1(30))}>Action</button> <br />
        For Count:
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
        </div>
        </>
    )
}