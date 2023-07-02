import React from 'react'
import DownloadBtn from './DownloadBtn'
import { BsArrowRight } from "react-icons/bs"

export default function Main() {
    return (
        <div className='main'>
            <div className="main-container container-fluid row">
                <div className="text-container col-lg-6 col-md-8 col-12">
                    <h2 className='title'>Easy way to buy goods.</h2>
                    <ul className="desc">
                        welcome to our Gadgets Apps.your getaway to a world of extraordinary technology at your fingertips.
                        Experience the ultimate convenience and innovation as you
                        explore our feature-packed app designed to
                        elevate your gadget experience to new heights.
                    </ul>
                    <p>
                        <a href="#" className="learn-more">
                            <BsArrowRight className='icon' /> Read more about</a>
                        Gadgets
                    </p>
                    <DownloadBtn />
                </div>
                <div className="img-container col-lg-6 col-md-4 col-12">
                    <img src="/images/phone-screen.jpg" />
                </div>
            </div>
        </div>
    )
}
