import React from 'react';
import TrainDetails from '../components/TrainDetails';

const SingleTrainPage = () => {
  const train = { id: 1, name: 'Train 1', departureTime: '10:00 AM', destination: 'City A', duration: '2 hours' };

  return (
<div>
<h1>Train Schedule</h1>
<TrainDetails train={train} />
</div>
  );
};


export default SingleTrainPage;