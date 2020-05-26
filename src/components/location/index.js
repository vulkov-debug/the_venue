import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1466.7149477135285!2d23.31190595779816!3d42.673435203546276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa84fdb8949027%3A0x8d78e91fd62717ef!2z0YPQuy4g4oCe0J_QvtC_0L7QstC-4oCcIDPQkiwgMTQyMSDQti7Qui4g0JvQvtC30LXQvdC10YYsINCh0L7RhNC40Y8!5e0!3m2!1sbg!2sbg!4v1590502319794!5m2!1sbg!2sbg"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen
        title='title'
      ></iframe>
    <div className="location_tag">
        <div>Location</div>
    </div>


    </div>
  );
};

export default Location;
