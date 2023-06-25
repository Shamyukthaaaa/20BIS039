import React from 'react';
import TrainList from '../components/TrainList';

const AllTrainsPage = () => {
  const trains = [
    { id: 1, name: 'Train 1', departureTime: '10:00 AM', destination: 'City A' },
    { id: 2, name: 'Train 2', departureTime: '11:30 AM', destination: 'City B' },
    { id: 3, name: 'Train 3', departureTime: '1:45 PM', destination: 'City C' },
  ];

  return (
<div>
<h1>Train Schedule</h1>
<TrainList trains={trains} />
</div>
  );
};

export default AllTrainsPage;