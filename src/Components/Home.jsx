import React from 'react'
import backgroundImage from '../Assets/Images/homepage1.jpg';
import { Icon } from '@iconify/react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import snorkeling from '../Assets/Images/Snorkeling.jpg';
import fishing from '../Assets/Images/fishing.jpg';
import surfing from '../Assets/Images/surfing.jpg';
import bonfire from '../Assets/Images/bofire.jpg';

function Home() {
  return (
    <>
      <section
        className="home-section"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${backgroundImage})` }}>
        <div className='text-container main-grid'>
          <h1>VILLA</h1>
          <h1>MARISOL</h1>
        </div>
      </section>

      <div className='main-grid'>
        <section className='about-section margin-80'>
          <h2 className='h2-styles'>Your Coastal Retreat Awaits</h2>
          <p className='p-styles'>Nestled on the serene southern coast, Villa Serendipity offers an unparalleled escape into luxury and tranquility. Whether you're seeking a romantic getaway, a family retreat, or a peaceful haven with friends, our private villa provides the perfect setting. Set amidst stunning tropical surroundings, Villa Serendipity combines modern amenities with timeless charm, ensuring that your stay is as comfortable as it is memorable. Experience true relaxation in this exquisite hideaway, where every moment is crafted for your comfort and enjoyment.</p>
          <div className='abt-flex mt-5'>

            <div className='flex-box'>
              <div className='d-flex align-items-center'>
                <h2 className='h2-styles'>2K</h2>
                <Icon icon="iconoir:plus" className='icon-style' />
              </div>
              <p className='p-styles text-center'>Visitors per Month</p>
            </div>
            <div className='flex-box'>
              <div className='d-flex align-items-center'>
                <h2 className='h2-styles'>1K</h2>
                <Icon icon="iconoir:plus" className='icon-style' />
              </div>
              <p className='p-styles text-center'>5 Star Reviews</p>
            </div>
            <div className='flex-box'>
              <div className='d-flex align-items-center'>
                <h2 className='h2-styles'>5</h2>
                <Icon icon="iconoir:plus" className='icon-style' />
              </div>
              <p className='p-styles text-center'>Years of Excellence</p>
            </div>
            <div className='flex-box'>
              <div className='d-flex align-items-center'>
                <h2 className='h2-styles'>3</h2>
                <Icon icon="iconoir:plus" className='icon-style' />
              </div>
              <p className='p-styles text-center'>Minute Walk to the Beach</p>
            </div>

          </div>
        </section>
      </div>

      <section className='exper-sec margin-80'>
        <div className='main-grid'>
          <div className='exp-div'>
            <h2 className='h2-styles'>The Best Place to Enjoy Your Vacation</h2>
            <p className='p-styles'>Embrace the best of coastal living with a variety of experiences designed for relaxation and thrill seekers alike. Whether you’re here for the serene sunsets or heart-racing adventures, each moment at the villa is crafted to leave lasting memories.</p>
          </div>
          <div className="exp-card-sec mt-4">
            <div className="exp-cards card1">
              <div class="card">
                <div className="img-cont">
                  <img className='card-img-top' src={snorkeling} alt="Profile Pic" />
                  <h5 className='h5-styles'>Snorkeling Adventures</h5>
                </div>
                <div class="card-body">
                  <p class="card-text p-styles text-center">Explore vibrant marine life just off the shore.</p>
                </div>
              </div>
            </div>
            <div className="exp-cards card2">
              <div class="card">
                <div className="img-cont">
                  <img className='card-img-top' src={fishing} alt="Fishing" />
                  <h5 className='h5-styles'>Fishing Trips</h5>
                </div>
                <div class="card-body">
                  <p class="card-text p-styles text-center">Join local fishermen for an authentic coastal experience.</p>
                </div>
              </div>
            </div>
            <div className="exp-cards card3">
              <div class="card">
                <div className="img-cont">
                  <img className='card-img-top' src={surfing} alt="Surfing" />
                  <h5 className='h5-styles'>Surfing</h5>
                </div>
                <div class="card-body">
                  <p class="card-text p-styles text-center">Ride the waves and feel the rush of the ocean.</p>
                </div>
              </div>
            </div>
            <div className="exp-cards card4">
              <div class="card">
                <div className="img-cont">
                  <img className='card-img-top' src={bonfire} alt="Bonfire" />
                  <h5 className='h5-styles'>Bonfire Evenings</h5>
                </div>
                <div class="card-body">
                  <p class="card-text p-styles text-center">Cozy up with friends and family by a crackling beach bonfire.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='main-grid'>
        <section className='faq-sec margin-80'>
          <div className="faq-flex">
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item">
                <h2 class="accordion-header ">
                  <button class="accordion-button collapsed p-styles" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    What amenities are included with the stay?
                  </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body p-styles">Our amenities include private pools, beach access, fully-equipped kitchens, Wi-Fi, air conditioning, and daily housekeeping. Some rooms also feature outdoor terraces and spa services.</div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed p-styles" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Is the villa pet-friendly??
                  </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body p-styles">We regret to inform you that Villa Serendipity does not allow pets to ensure a comfortable experience for all guests. Service animals are welcome.</div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed p-styles" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    How can I make a reservation?
                  </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body p-styles">Reservations can be made directly through our website or by contacting our reservations team via phone or email. You can check availability and book your stay online.</div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed p-styles" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                    What is the check-in and check-out time?
                  </button>
                </h2>
                <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body p-styles">Check-in is available from 3:00 PM, and check-out is by 11:00 AM. If you require flexibility, please contact us in advance to discuss potential arrangements.</div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed p-styles" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                    What is the cancellation policy?
                  </button>
                </h2>
                <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body p-styles">Our standard cancellation policy requires at least 48 hours' notice for a full refund. For reservations canceled within 48 hours of arrival, a one-night stay fee may apply. Please review our full cancellation policy on our website for more details.</div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed p-styles" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                    Are there restaurants and shops nearby?
                  </button>
                </h2>
                <div id="flush-collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body p-styles">Yes, there are several dining and shopping options within a short distance from the villa. Our staff can recommend local favorites and provide directions.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed p-styles" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                    What health and safety measures are in place?
                  </button>
                </h2>
                <div id="flush-collapseSeven" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body p-styles">We adhere to strict health and safety protocols, including enhanced cleaning procedures, social distancing measures, and health screenings for staff. Your safety and well-being are our top priorities.</div>
                </div>
              </div>
            </div>

            <h2 className='h2-styles'>What do you have in your mind?</h2>
          </div>
        </section>
      </div>



    </>



  )
}

export default Home
