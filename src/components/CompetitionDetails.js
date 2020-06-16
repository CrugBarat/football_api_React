import React from 'react';

const CompetitionDetails = (props) => {
  if(!props.competition) return null;

  return (
      <p>{props.competition.name}</p>
  )
}

export default CompetitionDetails;
