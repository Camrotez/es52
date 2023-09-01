import UseGithubUser from "./UseGithubUser.JSX"

export function GithubUser({username}) {
    const {data, error, isLoad, onRefresh} = UseGithubUser(username)


    return (
        <div>
            <button onClick={onRefresh}>Refresh</button>
            {isLoad && <h1>Loading...</h1>}
            {error && <h1>Errror: {error}</h1>}
            { data && <div>
                <p>Name: {data.login}</p>
                <p>Id: {data.id}</p>
            </div>}
        </div>
        
    )

}