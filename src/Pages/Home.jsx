import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from '../Components/Slider';
import '../Styles/Home.css';

const Home = () => {
  const navigate = useNavigate();

  const blogs = [
    {
      id: 1,
      title: 'Inside the Calm Before the Storm',
      image: '/Cardimg1.jpg',
      description: 'What goes on before RCB players step on the field? Discover how Virat and team prep...',
    },
    {
      id: 2,
      title: 'Kohli-Salt Partnership',
      image: 'cardimg2.jpg',
      description: 'Fun and chaos – get a glimpse of the hilarious moments before match day begins!',
    },
    {
      id: 3,
      title: 'AB de Villiers: The Silent Motivator',
      image: 'cardimg3.jpg',
      description: 'How AB’s quiet words lift the squad – a peek into his role behind the scenes.',
    },
    {
      id: 4,
      title: 'Captain Talks: Rajat Patidar’s Fire-Up Speech',
      image: 'cardimg4.jpg',
      description: 'A powerful insight into Kohli’s intense pep talks that get the team ready to roar!',
    },
    {
      id: 5,
      title: 'Salt’s Assult',
      image: 'cardimg11.jpg',
      description: 'Before matches, it’s tunes and chill with Maxi. Get the inside vibe!',
    },
    {
      id: 6,
      title: 'Last-Minute Strategy Room',
      image: 'cardimg8.jpg',
      description: 'Pressure moments and final tweaks – what the coaching room looks like minutes before battle!',
    },
    {
      id: 7,
      title: 'Fan Cheers That Lift Spirits',
      image: 'cardimg9.jpg',
      description: 'Feel the energy as the crowd roars and inspires the team like no other!',
    },
    {
      id: 8,
      title: 'Behind The Scenes: Team Bonding',
      image: 'cardimg10.jpg',
      description: 'Discover how the RCB team builds chemistry off the field for on-field success.',
    },
  ];

  return (
    <>
    <section
  className="hero-section text-white text-center py-5 bg-dark"
>
  <h1
    className="display-4 fw-bold"
    data-aos="fade-left"
    data-aos-delay="300"
    data-aos-duration="1000"
  >
    Relive <span className="text-warning">#theBOLDArmy</span> moments
  </h1>

  <div className="lead mt-4">
    <p data-aos="fade-left" data-aos-delay="500" data-aos-duration="800">
      Share every thrilling match day moment at the mighty Chinnaswamy! From Virat Kohli's iconic shots to nail-biting finishes—Dive into memories, stories and emotions that define the Royal Challengers Bengaluru & our 12th man.
    </p>
   
    <p data-aos="fade-left" data-aos-delay="700" >
      Write your stories, share moments and roar with us.
    </p>

    <div
      data-aos="fade-left"
      data-aos-delay="1300"
      data-aos-duration="1000"
      className="mt-4 fw-bold"
    >
      <span className="text-white fst-italic">"Ee Sala Cup </span>
      <s className="text-danger fst-italic">Namde</s>
      <span className="rcb-poster-font text-warning fst-italic"> Namdu!"</span>
    </div>
  </div>
</section>


      <Slider />

      {/* Dressing Room Blogs Section */}
      <section className="container-fluid py-5 ">
        <div className="mb-5 text-center">
        <h2
          className="mb-4 text-center section-heading"
          data-aos="slide-right"
        >
          <span className="text-danger">RCB </span>
          <span className="text-white">Insights</span>
        </h2>
        <p className="lead text-white" data-aos="flip-right" data-aos-delay="300">
          Step into the dressing room and discover the untold stories of RCB's journey.
        </p>
        </div>

        <div className="row px-3">
          {blogs.map((blog, index) => (
            <div
              className="col-lg-3 col-md-6 col-sm-12 mb-4"
              key={blog.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="1000"
            >
              <div className="card h-100 shadow-sm  text-white custom-card rounded">
                <img
                  src={blog.image}
                  className="card-img-top"
                  alt={blog.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{blog.title}</h5>
                  <p className="card-text">{blog.description}</p>
                  <button
                    className="btn btn-outline-secondary mt-auto"
                    onClick={() => navigate('/About')}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Write Blog CTA Section */}
      <section
        className="write-blog-section text-center py-5 text-white mb-5"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <div className="container">
          <h2 className="section-heading mb-4">Have a Bold Moment to Share?</h2>
          <p className="lead mb-3">
            From chants in the stands to locker room vibes—tell us your side of the story and inspire the 12th Man Army!
          </p>
          <button
            className="btn btn-outline-warning btn-lg px-4 py-2 fw-bold"
            onClick={() => navigate('/CreateBlog')}
          >
            Share Your Story
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
