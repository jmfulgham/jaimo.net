import React from 'react';
import './styles.css'

const Overview = () => {
    return (<div className={"parent-overview"}>
        <div className={"description"}><p>Hey there! I'm a seasoned full stack software engineer with more than 5 years
            of hands-on experience crafting scalable apps and software across ecommerce, fintech, and web3. Before
            diving into software, I studied Economics and spent 6 years as a business analyst in banking and
            finance. Previously, I worked at Unstoppable Domains, where I improved their ecommerce platform, both
            on and off the blockchain. Now, I'm on the lookout for my next exciting opportunity to apply my engineering
            prowess. Let's connect and explore how we can create something together! </p>
        </div>
        <div className={"skills"}>
            <h2 id={"skills"}>The Stack</h2>
            <p className={"poppins-light"}>React, Typescript, GraphQL, Next, Nest, Node, Express, PostgreSQL, React
                Testing Library, Jest, Mocha, Enzyme, Sinon,
                Cypress, Docker, Kubernetes, Google Cloud Platform
            </p>
        </div>
    </div>)
}

export default Overview