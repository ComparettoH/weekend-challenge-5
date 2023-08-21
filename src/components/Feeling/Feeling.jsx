import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export function FeelingHow() {

    const [feelingRate, setfeelingRate] = useState ("")
    const history = useHistory()

    const enterRating = (event) => {setfeelingRate(event.target.value)}

    const handleClick = (event) => {
        event.preventDefault()
        if (feelingRate === "") {
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
            history.push('/understanding')
        }
    }
 

    return (
        <div>
            <h1>How are you feeling today?</h1>
            <form>
                <label for="feeling">Feelings based on a scale of 1-5 <br></br>(1 being worst and 5 being best):</label>
                <br></br>
                <input type="number" value={feelingRate} onChange={enterRating}/>
                        <button onClick={handleClick}>
                            Next
                        </button>
                    </form>
                    </div>
                )
}