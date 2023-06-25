import React from 'react';

const TrainDetails = ({ train }) => {
  return (
<div>
<h2>Train Details</h2>
<p>Name: {train.name}</p>
<p>Departure Time: {train.departureTime}</p>
<p>Destination: {train.destination}</p>
<p>Duration: {train.duration}</p>
</div>
  );
};


export default TrainDetails;