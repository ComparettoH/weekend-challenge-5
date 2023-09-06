import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export function UnderstandingHow() {
    //needed for local state submission
    const [understandingRate, setUnderstandingRate] = useState (Number(''))
    //needed for nav to next page
    const history = useHistory()
    //needed for updating newFeedback state
    const dispatch = useDispatch()
    // reducer to keep form status intact from page to page
    const newFeedback = useSelector(store => store.newFeedback)

    const enterRating = (event) => {event.preventDefault()
        setUnderstandingRate(event.target.value)}

    const handleClick = (event) => {
        event.preventDefault()
        if (understandingRate === '') {
            alert("Next steps cannot be taken until a number of 1 - 5 has been selected for submission", window.history.go('/understanding'))
        }
        if(understandingRate > 5){
            alert("Next steps cannot be taken until a number of 1 - 5 has been selected for submission", window.history.go('/understanding'))
        }
        if (understandingRate < 1){
            alert("Next steps cannot be taken until a number of 1 - 5 has been selected for submission", window.history.go('/understanding'))
        }
        else {
            console.log('finally success in understanding!!')
            dispatch({
                type: 'SET_UNDERSTANDING',
                payload: understandingRate
            })
            history.push('/support')
        }
    }
 
    return (
        <div>
        <h1>How well are you understanding the content?</h1>
        <form>
            <label id="understanding">Understanding based on a scale of 1-5 <br></br>(1 being not at all and 5 being fully understood):</label>
            <br></br>
            <input type="number" value={understandingRate} onChange={enterRating}/>
                    <button onClick={handleClick}>
                        Next
                    </button>
                </form>
                </div>
    )
}