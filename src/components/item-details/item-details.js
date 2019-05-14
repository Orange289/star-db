import React, { Component } from 'react';

import './item-details.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorButton from '../error-button/error-button';

const Record = ({ field, label, item }) => {
  return(
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  )
};

export {
  Record
};

export default class ItemDetails extends Component {
  
  swapiService = new SwapiService();

  state = {
    item: null,
    image: null,
    loading: true
  };

  componentDidMount() {
    this.updateItem();
    this.setState({ loading: false });
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.setState({ loading: true });
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;

    if (!itemId) {
      return;
    }

    getData(itemId)
      .then((item) => {
        this.setState({ 
          item,
          image: getImageUrl(item),
          loading: false });
      });
  };

  render() {

    const { item, loading } = this.state;

    if (!item) {
      return <span>Select a item from a list</span>;
    }
    const spinner = loading ? <Spinner /> : null;
    const content = !loading ? <ItemView 
      item={this.state.item}
      image={this.state.image}
      records={
        React.Children.map(this.props.children, (child) => {
          return React.cloneElement(child, { item });
        })
      } /> : null;

    return (
      <div className="item-details card">
        {spinner}
        {content}
      </div>
    )
  }
};

const ItemView = ({ item, image, records }) => {

  const { name } = item;
  
  return (
    <React.Fragment>
      <img
        className="item-image"
        src={image}
        alt="" />
      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          {records}
          {/* <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>{birthYear}</span>
          </li>
          <li className="list-group-item"> 
            <span className="term">Eye Color</span>
            <span>{eyeColor}</span>
          </li>*/}
        </ul>
        <ErrorButton />
      </div>
    </React.Fragment>
  )

}

