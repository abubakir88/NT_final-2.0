import React from "react";

const MapComponent = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2243.5804051565788!2d37.611971176442566!3d55.78315898965302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTXCsDQ2JzU5LjQiTiAzN8KwMzYnNTIuNCJF!5e0!3m2!1sen!2s!4v1718025670407!5m2!1sen!2s"
      width="1400"
      height="670"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default MapComponent;
