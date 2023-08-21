import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export function UnderstandingHow() {

    const [understandingRate, setUnderstandingRate] = useState ("")
    const history = useHistory()

    const enterRating = (event) => {setUnderstandingRate(event.target.value)}

    const handleClick = (event) => {
        event.preventDefault()
        if (understandingRate === "") {
            alert("Next steps cannot be taken until a number of 1 - 5 has been selected for submission", window.history.go('/understanding'))
        }
        if(understandingRate > '5'){
            alert("Next steps cannot be taken until a number of 1 - 5 has been selected for submission", window.history.go('/understanding'))
        }
        if (understandingRate < '1'){
            alert("Next steps cannot be taken until a number of 1 - 5 has been selected for submission", window.history.go('/understanding'))
        }
        else {
            console.log('finally success in understanding!!')
            history.push('/support')
        }
    }
 
    return (
        <div>
        <h1>How well are you understanding the content?</h1>
        <form>
            <label for="understanding">Understanding based on a scale of 1-5 <br></br>(1 being not at all and 5 being fully understood):</label>
            <br></br>
            <input type="number" value={understandingRate} onChange={enterRating}/>
                    <button onClick={handleClick}>
                        Next
                    </button>
                </form>
                </div>
    )
}