import React, {Component, Fragment} from 'react';
import CompetitionSelector from '../components/CompetitionSelector';
import CompetitionDetails from '../components/CompetitionDetails';
import logo from '../logo.png';

class FootballContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      competitions: [],
      competitionId: 0
    }

    this.handleCompetitionSelect = this.handleCompetitionSelect.bind(this)
  }

  componentDidMount() {
    fetch("http://api.football-data.org/v2/competitions", {
      headers: {'X-Auth-Token': 'ff3990f4ff41489d9ad1bad2f46eb057'}
    })
    .then(res => res.json())
    .then(competitions => this.setState({competitions: competitions.competitions}))
    .catch(err => console.err);
  }

  handleCompetitionSelect(id) {
    this.setState({competitionId: id});
  }

  render() {
    const selectedCompetition = this.state.competitions.find(competition =>
    competition.id === parseInt(this.state.competitionId));

    return (
      <Fragment>
        <img className="logo" src={logo} alt=""/>
        <p className="title">FOOTBALL API</p>
        <CompetitionSelector competitions={this.state.competitions} onCompSelect={this.handleCompetitionSelect}/>
        <CompetitionDetails competition={selectedCompetition}/>
      </Fragment>
    )
  }
}

export default FootballContainer;
