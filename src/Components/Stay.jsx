import React from 'react'
import { Icon } from '@iconify/react';
import bed from '../Assets/Images/bed.jpg';
import privatepool from '../Assets/Images/privatepool.jpg';
import bbq from '../Assets/Images/bbq.jpg';
import spa from '../Assets/Images/spa.jpg';

function Stay() {
    return (
        <>
            <div className='main-grid'>
                <section className='intro-txt'>
                    <div className='main-grid text-center'>
                        <span className='pg-heading'>STAY</span>
                        <p className='p-styles'> Nestled along the serene coastline, our villa offers the ultimate beachside escape. Each stay is crafted for relaxation, with luxurious rooms, private pools, and exquisite dining experiences that bring the essence of the tropical surroundings to life. Whether you're lounging by the pool or dining by the ocean, every detail is designed to connect you with the calming rhythm of the sea. </p>
                    </div>
                </section>
                <section className='stay-gallery margin-80'>
                    <div className='stay-item'>
                        <div className='text-card test'>
                            <div className='text-card-body'>
                                <div><h2 className='h2-styles fw-bold' style={{ color: '#4F4F4F' }}>Cozy and Comfortable</h2><h2 className='h2-styles'> Double Bed Room</h2></div>

                                <div className="icon-card-set">
                                    <div className='flex-box'>
                                        <Icon icon="icon-park-solid:double-bed" className='icon-style' />
                                        <p className='p-styles text-center'>2 King Sized Bed </p>
                                    </div>
                                    <div className='flex-box'>
                                        <Icon icon="cbi:roomsbathroom" className='icon-style' />
                                        <p className='p-styles text-center'>1 Attached Bathroom</p>
                                    </div>
                                    <div className='flex-box'>
                                        <Icon icon="ic:round-wifi" className='icon-style' />
                                        <p className='p-styles text-center'>Free WiFi</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='stay-img'>
                            <img className='img-styles' src={bed} alt="Double Bed Room" />
                        </div>
                    </div>
                    <div className='stay-item flex-lg-row-reverse'>
                        <div className='text-card test'>
                            <div className='text-card-body'>
                                <div><h2 className='h2-styles fw-bold' style={{ color: '#4F4F4F' }}>Relaxing Experience of</h2><h2 className='h2-styles'>Private Pool</h2></div>
                                <div className="icon-card-set">
                                    <div className='flex-box'>
                                        <Icon icon="mingcute:sun-fog-fill" className='icon-style' />
                                        <p className='p-styles text-center'>Sunset View</p>
                                    </div>
                                    <div className='flex-box'>
                                        <Icon icon="fontisto:cocktail" className='icon-style' />
                                        <p className='p-styles text-center'>Refreshing Cocktail</p>
                                    </div>
                                    <div className='flex-box'>
                                        <Icon icon="healthicons:swim" className='icon-style' />
                                        <p className='p-styles text-center'>Relaxing Swim</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='stay-img'>
                            <img className='img-styles' src={privatepool} alt="Private Pool" />
                        </div>
                    </div>
                    <div className='stay-item'>
                        <div className='text-card test'>
                            <div className='text-card-body'>
                            <div><h2 className='h2-styles fw-bold' style={{ color: '#4F4F4F' }}>Delightful Feast of</h2><h2 className='h2-styles'>BBQ Dinner</h2></div>
                                <div className="icon-card-set">
                                    <div className='flex-box'>
                                        <Icon icon="maki:bbq" className='icon-style' />
                                        <p className='p-styles text-center'>BBQ Area</p>
                                    </div>
                                    <div className='flex-box'>
                                        <Icon icon="solar:bonfire-bold" className='icon-style' />
                                        <p className='p-styles text-center'>Bonfire Night</p>
                                    </div>
                                    <div className='flex-box'>
                                        <Icon icon="fontisto:cocktail" className='icon-style' />
                                        <p className='p-styles text-center'>Cocktail Party</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='stay-img'>
                            <img className='img-styles' src={bbq} alt="BBQ Dinner" />
                        </div>
                    </div>
                    <div className='stay-item flex-lg-row-reverse'>
                        <div className='text-card test'>
                            <div className='text-card-body'>
                            <div><h2 className='h2-styles fw-bold' style={{ color: '#4F4F4F' }}>Serene Retreat of</h2><h2 className='h2-styles'>Spa and Wellness</h2></div>
                                <div className="icon-card-set">
                                    <div className='flex-box'>
                                        <Icon icon="tabler:massage" className='icon-style' />
                                        <p className='p-styles text-center'>Relaxing Massage</p>
                                    </div>
                                    <div className='flex-box'>
                                        <Icon icon="emojione-monotone:person-getting-massage" className='icon-style' />
                                        <p className='p-styles text-center'>Skincare Treatments</p>
                                    </div>
                                    <div className='flex-box'>
                                        <Icon icon="healthicons:exercise-yoga" className='icon-style' />
                                        <p className='p-styles text-center'>Yoga Meditation</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='stay-img'>
                            <img className='img-styles' src={spa} alt="Spa & Wellness" />
                        </div>
                    </div>

                </section>
            </div>
        </>

    )
}

export default Stay
