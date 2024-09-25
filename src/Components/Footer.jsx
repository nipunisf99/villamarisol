import React from 'react'
import { Icon } from '@iconify/react';


function Footer() {
    return (
        <div className='footer-sec margin-80'>
            <div className="main-grid">
                <div className="pg-links mb-3">
                    <p className='p-styles'>Home</p>
                    <p className='p-styles'>Stay</p>
                    <p className='p-styles'>Gallery</p>
                    <p className='p-styles'>Booking</p>
                </div>
                <div className='info-links'>
                    <div className="findus d-flex flex-column align-items-sm-start align-items-center">
                        <p className='p-styles'>Find Us</p>
                        <p className='p-infostyles'>Hexa Road, Ceylon Drive, Colombo 06.</p>
                        <div className='d-flex gap-3'>
                            <div className='icon-flex'>
                                <Icon icon="ic:round-phone" className='icon-style me-2' />
                                <p className='p-infostyles text-center'>+94 112 469 456</p>
                            </div>
                            <div className='icon-flex'>
                                <Icon icon="clarity:email-solid" className='icon-style me-2' />
                                <p className='p-infostyles text-center'>marisol@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="followus d-flex flex-column align-items-sm-start align-items-center">
                        <p className='p-styles'>Follow Us On</p>
                        <div className='d-flex justify-content-evenly'>
                            <Icon icon="ic:outline-facebook" className='icon-style me-2' />
                            <Icon icon="ri:instagram-fill" className='icon-style me-2' />
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Footer
