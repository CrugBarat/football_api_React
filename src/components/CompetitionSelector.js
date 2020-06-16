import React from 'react';

const CompetitionSelector = (props) => {
  const options = props.competitions.map(competition => {
      return <option key={competition.id} value={competition.id}>{competition.name}</option>
  });

  function handleChange(ev) {
    props.onCompSelect(ev.target.value);
  }

  return (
    <select onChange={handleChange}>
      <option disabled>Choose a Competition</option>
      {options}
    </select>
  )
}

export default CompetitionSelector;
