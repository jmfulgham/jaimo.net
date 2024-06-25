import React from 'react';
import './styles.css'

const Overview = () => {
    return (<div className={'parent-overview'}>
        <div className={'description'}><p>I'm a full stack engineer that specializes in Test Driven Development.</p>
        </div>
        <div className={'skills'}>
            <h2 id={'skills'}>The Stack</h2>
            <p className={'poppins-light'}>React, Typescript, GraphQL, Next, Nest, Node, Express, PostgreSQL, React Testing Library, Jest, Mocha, Enzyme, Sinon,
                Cypress, Docker, Kubernetes, Google Cloud Platform
            </p>
    </div>
</div>)
}

export default Overview