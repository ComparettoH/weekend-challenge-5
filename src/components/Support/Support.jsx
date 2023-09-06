import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export function SupportHow() {
    //needed for local state submission
    const [supportRate, setSupportRate] = useState (Number(''))
    //needed for nav to next page
    const history = useHistory()
    //needed for updating newFeedback state
    const dispatch = useDispatch()
    //reducer to keep form status intact from page to page
    const newFeedback = useSelector(store => store.newFeedback)

    const enterRating = (event) => {event.preventDefault()
        setSupportRate(event.target.value)}

    const handleClick = (event) => {
        event.preventDefault()
        if (supportRate === '') {
            alert("Next steps cannot be taken until a number of 1 - 5 has been selected for submission", window.history.go('/support'))
        }
        if(supportRate > 5){
            alert("Next steps cannot be taken until a number of 1 - 5 has been selected for submission", window.history.go('/support'))
        }
        if (supportRate < 1){
            alert("Next steps cannot be taken until a number of 1 - 5 has been selected for submission", window.history.go('/support'))
        }
        else {
            console.log('finally success in suppport!!')
            dispatch({
                type: 'SET_SUPPORT'
            })
            history.push('/comments')
        }
    }
 
    return (
        <div>
        <h1>How well are you being supported?</h1>
        <form>
            <label id="support">Support based on a scale of 1-5 <br></br>(1 being not at all and 5 being very supported):</label>
            <br></br>
            <input type="number" value={supportRate} onChange={enterRating}/>
                    <button onClick={handleClick}>
                        Next
                    </button>
                </form>
                </div>
    )
}