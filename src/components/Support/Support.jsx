import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export function SupportHow() {

    const [supportRate, setSupportRate] = useState ("")
    const history = useHistory()

    const enterRating = (event) => {setSupportRate(event.target.value)}

    const handleClick = (event) => {
        event.preventDefault()
        if (supportRate === "") {
            alert("Next steps cannot be taken until a number of 1 - 5 has been selected for submission", window.history.go('/support'))
        }
        if(supportRate > '5'){
            alert("Next steps cannot be taken until a number of 1 - 5 has been selected for submission", window.history.go('/support'))
        }
        if (supportRate < '1'){
            alert("Next steps cannot be taken until a number of 1 - 5 has been selected for submission", window.history.go('/support'))
        }
        else {
            console.log('finally success in suppport!!')
            history.push('/comment')
        }
    }
 
    return (
        <div>
        <h1>How well are you being supported?</h1>
        <form>
            <label for="support">Support based on a scale of 1-5 <br></br>(1 being not at all and 5 being very supported):</label>
            <br></br>
            <input type="number" value={supportRate} onChange={enterRating}/>
                    <button onClick={handleClick}>
                        Next
                    </button>
                </form>
                </div>
    )
}