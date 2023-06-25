import React from 'react';

 

const TrainList = ({ trains }) => {
  return (
<div>
<h2>All Trains</h2>
<ul>
        {trains.map(train => (
<li key={train.id}>
            {train.name} - {train.departureTime} to {train.destination}
</li>
        ))}
</ul>
</div>
  );
};

 

export default TrainList;