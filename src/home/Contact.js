import React, { useEffect } from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer';

export default function Contact() {


    useEffect(() => {
        window.scrollTo(0, 0);

    }, [])

    return (
        <div className='content_page'>
            <Header />
            <div className='content_page_design'>
                <img src={require('../assets/images/img.jpg')} />
                <div className='contact_detail'>
                    <h5>Reach out to us for any gaming support or inquiries</h5>
                    <h6>we're here to help!</h6>
                    <a href='mailto:help.gos @arshiyainfosolutions.com'>help.gos @arshiyainfosolutions.com</a>
                </div>
            </div>
            <Footer />
        </div>
    )
}
