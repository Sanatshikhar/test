import React from 'react';

const Carousel = () => {
  return (
    <section>
      <a href="#carouselExampleControls" className="carousel-control-prev" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a href="#carouselExampleControls" className="carousel-control-next" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
      <img src="images/edit1.jpg" alt="Editor's Pick" />
      <img src="images/edit2.jpg" alt="Editor's Pick" />
    </section>
  );
};

export default Carousel;