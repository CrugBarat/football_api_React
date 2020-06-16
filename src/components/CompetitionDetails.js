import React, {Fragment} from 'react';

const CompetitionDetails = (props) => {
  if(!props.competition) return null;

  return (
    <Fragment>
      <h3 className="details-title">Competition Details</h3>
      <img width="150" src={props.competition.area.ensignUrl} alt=""/>
      <p>Competition: <span>{props.competition.name}</span></p>
      <p>Country: <span>{props.competition.area.name}</span></p>
      <p>Start Date: <span>{props.competition.currentSeason.startDate}</span></p>
      <p>End Date: <span>{props.competition.currentSeason.endDate}</span></p>
      <p>Current Matchday: <span>{props.competition.currentSeason.currentMatchday}</span></p>
    </Fragment>
  )
}

export default CompetitionDetails;
