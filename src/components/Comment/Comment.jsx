import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch, useSelector
 } from 'react-redux';

export function CommentToBeMade() {
    //needed for local state submission
    const [comment, setComment] = useState ('')
    //needed for nav from page to page
    const history = useHistory()
    //needed for updating newFeedback state
    const dispatch = useDispatch()
    //reducer to keep form status on all pages
    const newFeedback = useSelector(store => store.newFeedback)

    const enterComment = (event) => {event.preventDefault()
        setComment(event.target.value)}

    const handleClick = (event) => {
        event.preventDefault()
            console.log('finally success in comments!!')
            dispatch({
                type: 'SET_COMMENT',
                payload: comment
            })
            history.push('/review')
    } 

    return (
        <div>
        <h1>Any comments you want to leave?</h1>
        <form>
            <label id="comments">Comments/Thoughts/Suggetions:</label>
            <br></br>
            <input type="text" value={comment} onChange={enterComment}/>
                    <button onClick={handleClick}>
                        Next
                    </button>
                </form>
                </div>
    )
}