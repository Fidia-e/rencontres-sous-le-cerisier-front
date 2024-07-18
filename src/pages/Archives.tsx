import React, { FunctionComponent } from 'react';
import Timeline from 'components/Timeline';

const Archives: FunctionComponent = () => {
  return (
    <div className="archives-container">
      <h2 className="title">
        <span className="title-span">Archives des</span> <br />
        <span className="bg-red red-span">Rencontres</span> <br />
        <span className="title-span">Théatrales de</span> <br />
        <span className="bg-red red-span">Savignargues</span>
      </h2>
      <Timeline />
    </div>
  );
};

export default Archives;
