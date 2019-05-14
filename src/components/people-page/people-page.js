import React, {Component} from 'react';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
import Row from '../row';
import ErrorBoundry from '../error-boundry';

import './people-page.css';

export default class PeoplePage extends Component {

  swapiService = new SwapiService();
  
  state = {
    personSelected: 5
  };

  onPersonSelected = (id) => {
    this.setState({
      personSelected: id
    });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    };

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}>
          {(i) => (`${i.name} (${i.gender})`)}     
      </ItemList>
    );

    const itemDetails = (
      <ErrorBoundry>
        <ItemDetails itemId={this.state.personSelected} />
      </ErrorBoundry>
    );

    return (
      <div>
        <Row left={itemList} right={itemDetails} />
        {/* <Row left="Foo" right="Bar" /> */}
      </div>

    )
  }
};
