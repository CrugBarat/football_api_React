import React from 'react';

const CompetitionSelector = (props) => {

  const options = props.competitions.map(competition => {
      return <option key={competition.id}>{competition.name}</option>
  });

  return (
    <select>
      <option disabled>Choose a Competition</option>
      {options}
    </select>
  )
}

export default CompetitionSelector;
