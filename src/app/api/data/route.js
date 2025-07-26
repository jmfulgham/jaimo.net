import dotenv from "dotenv";
import {NextResponse} from "next/server";

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

export async function GET(req, res) {
    const ghToken = process.env.NEXT_PUBLIC_GH_ACCESS_TOKEN;

    if (!ghToken) res.status(500).json({error: "No Github access token configured"});
    try {
        const response = await fetch("https://api.github.com/graphql", {
            method: "POST",
            headers: {
                Authorization: `bearer ${ghToken}`,
                "Content-Type": "application/json",
                "User-Agent": "Vercel-Serverless-Function",
                "cache": "force-cache",
            },
            body: JSON.stringify({query})
        });
        if (response.ok) {
            const {data} = await response.json();
            return new Response(JSON.stringify(data.user.pinnedItems));
        }
    } catch (e) {
        //set a backup option in case of issue from GH
        return new Response([{
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
                }]);
    }
}
