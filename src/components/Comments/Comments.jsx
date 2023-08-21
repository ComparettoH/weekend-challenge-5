import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export function CommentsToBeMade() {
    return (
        <div>
            <p>In Comments page whoooooooooooo!</p>
            <Link to="/review">
                <button>Next</button>
            </Link>
        </div>
    )
}