import { Link } from "react-router-dom";

function NotFoundPage() {
    return <>
        <h1>Nothing Found</h1>
        <Link to="/">Let's Go Home</Link>
    </>
}

export default NotFoundPage;