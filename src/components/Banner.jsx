// import React from 'react'

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-wrapper container">
        {/* <div className='banner-img'>
             <img className='img' src="/images/mid-banner.png" alt="banner-img" />
          </div> */}
        <div className="banner-details">
          <h2>
            INTERNATIONAL YEAR OF <br /> FRUITS & <span> ABLES </span>
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Aspernatur, accusamus. <br /> Adipisci ut perferendis optio
            doloremque accusamus aut blanditiis quos eveniet.
          </p>

          <button className="secondary-btn">View More &rarr;</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
