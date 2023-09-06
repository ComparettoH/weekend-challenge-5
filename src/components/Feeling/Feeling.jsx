import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export function FeelingHow() {
    // needed for local state submission
    const [feelingRate, setfeelingRate] = useState (Number(''))
    // needed for nav to next page
    const history = useHistory()
    // needed for updating newFeedback state
    const dispatch = useDispatch()
    // reducer to keep form status intact from page to page
    const newFeedback = useSelector(store => store.newFeedback)

    const enterRating = (event) => 
        {event.preventDefault()
        setfeelingRate(event.target.value)}

    const handleClick = (event) => {
        event.preventDefault()
        console.log(`Adding feedback`, newFeedback)
        if (feelingRate === '') {
            alert("Next steps cannot be taken until a number of 1 - 5 has been selected for submission", window.history.go('/feeling'))
        }
        if(feelingRate > '5'){
            alert("Next steps cannot be taken until a number of 1 - 5 has been selected for submission", window.history.go('/feeling'))
        }
        if (feelingRate < '1'){
            alert("Next steps cannot be taken until a number of 1 - 5 has been selected for submission", window.history.go('/feeling'))
        }
        else {
            console.log('finally success in feeling!!')
            dispatch({
                type: 'SET_FEELINGS',
                payload: feelingRate
            })
            history.push('/understanding')
        }
    }
 

    return (
        <div>
            <h1>How are you feeling today?</h1>
            <form>
                <label>Feelings based on a scale of 1-5 <br></br>(1 being worst and 5 being best):</label>
                <br></br>
                <input type="number" value={feelingRate} onChange={enterRating}/>
                        <button onClick={handleClick}>
                            Next
                        </button>
                    </form>
                    </div>
                )
}