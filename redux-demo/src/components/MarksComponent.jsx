import {useDispatch,useSelector} from 'react-redux';
import { add, remove } from './arraySlice';
export default function MarksComponent(){
    const dispatch = useDispatch();
    const marks = useSelector((state) =>state.marks.value);

    return(
        <>
            <div>
        Marks: {marks.join(", ")} <br />
        <button onClick={() => dispatch(add(500))}>add 500</button>
        <button onClick={() => dispatch(remove(90))}>remove 90</button>
        </div>
        </>
    )

}