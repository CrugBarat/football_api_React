import React, {Component, Fragment} from 'react';
import CompetitionSelector from '../components/CompetitionSelector';
import CompetitionDetails from '../components/CompetitionDetails';

class FootballContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      competitions: []
    }
  }

  componentDidMount() {
    fetch("http://api.football-data.org/v2/competitions", {
      headers: {'X-Auth-Token': 'ff3990f4ff41489d9ad1bad2f46eb057'}
    })
    .then(res => res.json())
    .then(competitions => this.setState({competitions: competitions}))
    .catch(err => console.err);
  }


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
