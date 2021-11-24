import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incremented } from '../Store/newsSlice';



const Playground = () => {
    const dispatch = useDispatch();
    const { value, news } = useSelector((state) => state);
    //useEffect(() => { console.log(value); }, [value]);
    function disV() {
        //console.log(incremented);
        dispatch(incremented());
    }

    return <React.Fragment>
        <button onClick={() => console.log(value)} style={{ 'marginTop': '100px' }}> Console Log value </button>
        <button onClick={() => disV()} style={{ 'marginTop': '100px' }}> Dispatch value </button>
        <button onClick={() => console.log(news)}>  Console Log news </button>
    </React.Fragment>
}

export default Playground;