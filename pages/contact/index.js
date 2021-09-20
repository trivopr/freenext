import React from 'react'
import MapGoogle from '../../components/GoogleMap/MapGoogle'
import Layout from '../../components/layout/Layout'

function Contact() {
    return (
        <Layout>
            <div className='container mt-5'>
                <h1>CONTACT PAGE</h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, possimus. Nesciunt id a itaque dignissimos dolore? Quos, explicabo eligendi quo qui quisquam, obcaecati minima, nemo officia cum molestias omnis sapiente!

                <div id="map">
                    <MapGoogle />
                </div>
            </div>
        </Layout>
    )
}

export default Contact
