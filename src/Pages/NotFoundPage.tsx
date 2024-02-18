import { Link } from "react-router-dom";

function NotFoundPage() {
    return <div className='wrapper text-center'>
        <h1>Nothing Found</h1>
        <Link to="/">Let's Go Home</Link>
    </div>
}

export default NotFoundPage;