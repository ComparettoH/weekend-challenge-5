import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export function UnderstandingHow() {

    return (
        <div>
            <p>In Understanding page whooo!</p>
            <Link to="/support">
                <button>Next</button>
            </Link>
        </div>
    )
}