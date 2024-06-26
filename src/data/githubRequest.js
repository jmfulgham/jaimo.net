import dotenv from "dotenv";
dotenv.config();

const query = `
    query {
        user(login: "jmfulgham"){
            pinnedItems(first: 5, types: REPOSITORY){
                nodes {
                    ...on Repository {
                        name
                        description
                        url
                    }
                }
            }
        }
}`

export const getGithubData = async () => {
    try {
        const response = await fetch("https://api.github.com/graphql", {
            method: "POST",
            headers: {
                Authorization: `bearer ${process.env.REACT_APP_GH_ACCESS_TOKEN}`
            },
            body: JSON.stringify({query})
        })
        const {data} = await response.json()
        return data.user.pinnedItems.nodes
    } catch (e) {
        console.error(`Error getting projects, ${e}`);
    }
}