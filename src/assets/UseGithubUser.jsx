import  useSWR  from "swr"

function UseGithubUser(username){
    const fetcher = url => fetch(url).then(response => response.json())
    const {data, error, mutate} = useSWR(username ? `https://api.github.com/users/${username}`: null, fetcher)

   function handleRefreshData(){
     mutate()
   }

    return {
        data: data,
        error,
        isLoad: !data && !error,
        onRefresh: handleRefreshData
    }
}
export default UseGithubUser