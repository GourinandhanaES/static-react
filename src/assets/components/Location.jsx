import React,{ useState } from 'react';
import './Location.css';

const locationsData = [
  {
    name: "BALHAM",
    address: "279-291 Balham High Road,London, SW17 7BA, balham@fitandyou.com",
    image: "https://cdn.prod.website-files.com/64a9b04469265b578b40676b/64ccb336ed4ffd9ca95804c5_gym%203.jpg"
  },
  {
    name: "CLAPHAM",
    address: "276-248 Lavender Hill, London, SW11 2LJ, clapham-g@fitandyou.com",
    image: "https://cdn.prod.website-files.com/64a9b04469265b578b40676b/64ccb31eebd9be09f8d8bcb9_gym%202.jpg"
  },
  {
    name: "BRIXTON",
    address: "244-154-31 Stockwell Road,London,SW9 9SP, brixton@fitandyou.com",
    image: "https://cdn.prod.website-files.com/64a9b04469265b578b40676b/64b938da9c8880298a94233e_gym%201.jpg"
  },
  {
    name: "HIGHBURY",
    address: "249-291 Avenell East Road,London, N6 1FE, highbury@fitandyou.com",
    image: "https://cdn.prod.website-files.com/64a9b04469265b578b40676b/64ccb34a7b69232997ee0c7a_gym%204.jpg"
  }
];

const Location = () => {
  const [activeLocation, setActiveLocation] = useState(null);

  const handleButtonClick = (index) => {
    setActiveLocation(index === activeLocation ? null : index); 
  };

  return (
    <div className="location-container" id='locations'>
      <h2 className="heading-zigzag">
        FIND<br />
        YOUR<br />
        NEAREST<br />
        GYM
      </h2>

      <div className="locations-row">
        {locationsData.map((location, index) => (
          <div className="location-box" key={index}>
            <button className="plus-button" onClick={() => handleButtonClick(index)}>
              +
            </button>

            {activeLocation === index && (
              <div className="location-details">
                <div className="image-content">
                  <img src={location.image} alt={location.name} />
                </div>
                <div className="writing">
                  <h1>{location.name}</h1>
                  <p>{location.address}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Location;
