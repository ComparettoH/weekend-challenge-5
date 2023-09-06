import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

export function ReviewSubmission () {
    //needed for nav from page to page
    const history = useHistory()
    //needed for submitting newFeedback to database
    const dispatch = useDispatch()
    //reducer that has status of form
    const newFeedback = useSelector( store => store.newFeedback)

    useEffect(() => {
        newFeedback
    }, []
    )

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch({
            type: 'ADD_FEEDBACK',
            payload: newFeedback
        })
    }
    console.log('testing', newFeedback)
    return (<div><h1>Review Your Feedback</h1>
    <form>
        {newFeedback.map((feedback, i) =>(<p key={i}>Feelings:{feedback}</p>))}
        <p>Feelings:</p>
        <p>Understanding:</p>
        <p>Support: </p>
        <p>Comments: </p>
        <button onClick={handleSubmit}>
            Submit
        </button>
    </form>

    </div>)
}