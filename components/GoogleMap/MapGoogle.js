import GoogleMapReact from 'google-map-react';
import React from 'react'

const MyMarker = ({ text, tooltip }) => (
    <div className="circle">
      <span className="circleText" title={tooltip}>
        {text}
      </span>
    </div>
);

const points = [
    { id: 1, title: "Round Pond", lat: 51.506, lng: -0.184 },
    { id: 2, title: "The Long Water", lat: 51.508, lng: -0.175 },
    { id: 3, title: "The Serpentine", lat: 51.505, lng: -0.164 }
  ];

function MapGoogle() {
    return (
        <div className="map-container">
            <GoogleMapReact
                bootstrapURLKeys={{
                key: "AIzaSyAFcQicsPRRI_-HBSTEAtHb7XDKdwj-D8o",
                language: "en",
                region: "US"
                }}
                defaultCenter={{ lat: 51.506, lng: -0.169 }}
                defaultZoom={15}
            >
                {points.map(({ lat, lng, id, title }) => {
                return (
                    <MyMarker
                    key={id}
                    lat={lat}
                    lng={lng}
                    text={id}
                    tooltip={title}
                    />
                );
                })}
            </GoogleMapReact>
        </div>
    )
}

export default MapGoogle
