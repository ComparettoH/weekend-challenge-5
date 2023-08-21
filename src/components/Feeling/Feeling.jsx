import { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export function FeelingHow() {

    const [feelingRate, setfeelingRate] = useState (null)
    const history = useHistory()

    const handleClick = () => {
        setfeelingRate({feelingRate})
        if (feelingRate > 0) {
            console.log('success!')
        }
        else {
            alert("Next steps cannot be taken until a number of 1 - 5 has been selected for submission", window.history.back())
        }
    }


    return (
        <div>
            <h1>How are you feeling today?</h1>
            <form>
                <label for="feeling">Feelings based on a scale of 1-5 <br></br>(1 being worst and 5 being best):</label>
                <br></br>
                <input type="number" value={feelingRate} min="1" max="5"/>
                    <Link to="/understanding">
                        <button onClick={handleClick}>
                            Next
                        </button>
                    </Link>
                    </form>
                    </div>
                )
}