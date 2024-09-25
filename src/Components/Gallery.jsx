import React from 'react'
import gal1 from '../Assets/Images/gal-1.jpg';
import gal2 from '../Assets/Images/gal-2.jpg';
import gal3 from '../Assets/Images/gal-3.jpg';
import gal4 from '../Assets/Images/gal-4.jpg';
import gal5 from '../Assets/Images/gal-5.jpg';
import gal6 from '../Assets/Images/gal-6.jpg';
import gal7 from '../Assets/Images/gal-7.jpg';
import gal8 from '../Assets/Images/gal-8.jpg';
import gal9 from '../Assets/Images/gal-9.jpg';
import gal10 from '../Assets/Images/gal-10.jpg';
import gal11 from '../Assets/Images/gal-11.jpg';
import gal12 from '../Assets/Images/gal-12.jpg';
import gal13 from '../Assets/Images/gal-13.jpg';
import gal14 from '../Assets/Images/gal-14.jpg';
import gal15 from '../Assets/Images/gal-15.jpg';
import gal16 from '../Assets/Images/gal-16.jpg';
import gal17 from '../Assets/Images/gal-17.jpg';

function Gallery() {
    return (
        <>
            <div className='main-grid'>
                <section className='intro-txt'>
                    <div className='main-grid text-center'>
                        <span className='pg-heading'>GALLERY</span>
                        <p className='p-styles'>Step into the serene beauty of our villa through a curated selection of images. From the breathtaking beachfront views to the lush tropical surroundings, each picture captures the essence of tranquility and luxury that our villa offers. Explore the charm and elegance of every corner, where every moment promises a memorable experience.</p>
                    </div>
                </section>
                <section className='gallery-sec margin-80'>
                    <div className='column'>
                        <div className='photo'>
                            <img className='img-styles' src={gal1} alt="Profile Pic" />
                        </div>
                        <div className='photo'>
                            <img className='img-styles' src={gal2} alt="Profile Pic" />
                        </div>
                        <div className='photo'>
                            <img className='img-styles' src={gal3} alt="Profile Pic" />
                        </div>
                        <div className='photo'>
                            <img className='img-styles' src={gal4} alt="Profile Pic" />
                        </div>
                        <div className='photo'>
                            <img className='img-styles' src={gal5} alt="Profile Pic" />
                        </div>
                    </div>

                    <div className='column'>
                        <div className='photo'>
                            <img className='img-styles' src={gal6} alt="Profile Pic" />
                        </div>
                        <div className='photo'>
                            <img className='img-styles' src={gal7} alt="Profile Pic" />
                        </div>
                        <div className='photo'>
                            <img className='img-styles' src={gal12} alt="Profile Pic" />
                        </div>
                        <div className='photo'>
                            <img className='img-styles' src={gal9} alt="Profile Pic" />
                        </div>
                        <div className='photo'>
                            <img className='img-styles' src={gal10} alt="Profile Pic" />
                        </div>
                    </div>

                    <div className='column'>
                        <div className='photo'>
                            <img className='img-styles' src={gal11} alt="Profile Pic" />
                        </div>
                        <div className='photo'>
                            <img className='img-styles' src={gal8} alt="Profile Pic" />
                        </div>
                        <div className='photo'>
                            <img className='img-styles' src={gal13} alt="Profile Pic" />
                        </div>
                        <div className='photo'>
                            <img className='img-styles' src={gal14} alt="Profile Pic" />
                        </div>
                        <div className='photo'>
                            <img className='img-styles' src={gal17} alt="Profile Pic" />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Gallery
