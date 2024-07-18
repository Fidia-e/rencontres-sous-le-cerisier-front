import React, { FunctionComponent } from 'react';
import { data } from 'utils/events-data';

const Timeline: FunctionComponent = () => {
  const content = data.map((item, index) => (
    <div key={index} data-testid="timeline-item">
      {index % 2 === 0 && (
        <div className="column-left ">
          <div className="col-card-left">
            <div className="col-card-para">{item.text1}</div>
            <div className="col-card-para">{item.text2}</div>
            <div className="col-card-para">{item.text3}</div>
            <div className="col-card-para">{item.text4}</div>
          </div>
        </div>
      )}
      {index % 2 === 0 && (
        <div className="column-right">
          <div className="col-note col-note-right">
            <p>{item.date}</p>
          </div>
        </div>
      )}

      <div className="column-center">
        {index % 2 === 0 && <div className="triangle-left"></div>}
        {index % 2 !== 0 && <div className="triangle-right"></div>}
        <div className="line"></div>
        <div className="circle"></div>
      </div>

      {index % 2 !== 0 && (
        <div className="column-right">
          <div className="col-card-right">
            <div className="col-card-para">{item.text1}</div>
            <div className="col-card-para">{item.text2}</div>
            <div className="col-card-para">{item.text3}</div>
            <div className="col-card-para">{item.text4}</div>
          </div>
        </div>
      )}
      {index % 2 !== 0 && (
        <div className="column-left">
          <div className="col-note col-note-left">
            <p>{item.date}</p>
          </div>
        </div>
      )}
      <div className="clearfix"></div>
    </div>
  ));

  return (
    <div className="timeline-container">
      <p className="subtitle">Programmation de 1996 à aujourd&apos;hui</p>
      <div className="timeline" data-testid="timeline_id">
        {content}
      </div>
    </div>
  );
};

export default Timeline;
