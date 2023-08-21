import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export function CommentsToBeMade() {

    const [comment, setComment] = useState ("")
    const history = useHistory()

    const enterComment = (event) => {setComment(event.target.value)}

    const handleClick = (event) => {
        event.preventDefault()
            console.log('finally success in comments!!')
            history.push('/review')
    } 

    return (
        <div>
        <h1>Any comments you want to leave?</h1>
        <form>
            <label for="comments">Comments/Thoughts/Suggetions:</label>
            <br></br>
            <input type="number" value={comment} onChange={enterComment}/>
                    <button onClick={handleClick}>
                        Next
                    </button>
                </form>
                </div>
    )
}