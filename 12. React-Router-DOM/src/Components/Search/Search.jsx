import { useLocation } from "react-router-dom";

function Search(){

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get("query");

    return (
        <>
            <h1>This is Search Page {query}</h1>
        </>
    )
}

export default Search;