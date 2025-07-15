import dotenv from "dotenv";
dotenv.config();

const query = `
    {
  user(login: "jmfulgham") {
    pinnedItems(first: 5, types: REPOSITORY) {
      nodes {
        ... on Repository {
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
                Authorization: `bearer ${process.env.NEXT_PUBLIC_GH_ACCESS_TOKEN}`
            },
            body: JSON.stringify({query})
        })
        const {data} = await response.json()
        return data.user.pinnedItems.nodes
    } catch (e) {
        console.error(`Error getting projects, ${e}`);
        //set a backup option in case of issue from GH
        return [
            {
                "name": "jaimo.net",
                "description": "My personal website built with React/Next.JS SPA and deployed on Vercel",
                "url": "https://github.com/jmfulgham/jaimo.net"
            },
            {
                "name": "remote-work",
                "description": "Beta version of a tech focused remote job board, built with React and deployed with Vercel",
                "url": "https://github.com/jmfulgham/remote-work"
            },
            {
                "name": "pollyglot",
                "description": "An OpenAI powered translation app built in HTML, CSS, and plain JavaScript",
                "url": "https://github.com/jmfulgham/pollyglot"
            }
        ]
    }
}
