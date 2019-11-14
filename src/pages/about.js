import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'


const AboutPage = () => {
    return (
        <Layout >
            <h1>About Me</h1>
            <p>I do things online, get in touch <Link to="/contact">here</Link> or chat with me on twitter <a href="https://twitter.com/vrtlakram" >@vrtlakram</a></p>
        </Layout>
    )
}

export default AboutPage