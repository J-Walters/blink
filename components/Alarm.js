import React from 'react';

// eslint-disable-next-line react/display-name
const Alarm = React.forwardRef((_, ref) => {
  return (
    <audio ref={ref}>
      <source src='./public' type='audio/mp3' />
      Your browser does not support the audio element.
    </audio>
  );
});

export default Alarm;
