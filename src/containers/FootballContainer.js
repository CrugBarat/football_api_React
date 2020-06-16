import React, {Component, Fragment} from 'react';
import CompetitionSelector from '../components/CompetitionSelector';
import CompetitionDetails from '../components/CompetitionDetails';

class FootballContainer extends Component {

  render() {
    return (
      <Fragment>
        <CompetitionSelector/>
        <CompetitionDetails/>
      </Fragment>
    )
  }
}

export default FootballContainer;
