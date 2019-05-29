import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import SwapiService from '../../services/swapi-service';
// import Row from '../row';

import ItemDetails, { Record } from '../item-details/item-details';
import './app.css';
import ErrorBoundry from '../error-boundry';

import ItemList from '../item-list';
import { 
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails
} from '../sw-components';

export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  render() {
    const planet = this.state.showRandomPlanet ?
      <RandomPlanet /> :
      null;

    return(
      <ErrorBoundry>
        <div className="stardb-app">
          <Header />

          <PersonDetails itemId={11} />

          <PlanetDetails itemId={5} />

          <StarshipDetails itemId={9} />

          <PersonList />

          <StarshipList />

          <PlanetList />


          {/* <Row 
            left={personDetails}
            right={starshipDetails} /> */}
          {/* {planet}

          <div className="row mb2 button-row">
            <button
              className="toggle-planet btn btn-warning btn-lg"
              onClick={this.toggleRandomPlanet}>
              Toggle Random Planet
          </button>
            <ErrorButton />
          </div>

          <PeoplePage />

          <div className="row mb2">
            <div className="col-md-6">
              <ItemList
                getData={this.swapiService.getAllPlanets}
                onItemSelected={this.onPersonSelected} >
                {(item) => item.name}
              </ItemList>
            </div>
            <div className="col-md-6">
              <ItemDetails personId={this.state.personSelected} />
            </div>
          </div>

          <div className="row mb2">
            <div className="col-md-6">
              <ItemList
                getData={this.swapiService.getAllStarships}
                onItemSelected={this.onPersonSelected}>
                {(item) => <span>{item.name} <button>!</button></span>}
              </ItemList>
            </div>
            <div className="col-md-6">
              <ItemDetails personId={this.state.personSelected} />
            </div>
          </div> */}


        </div>
      </ErrorBoundry>

    )
  }
};