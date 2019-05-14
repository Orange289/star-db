import React from 'react';
import ItemList from '../item-list';
import { withData } from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();

const {
  getAllPeople,
  getAllPlanets,
  getAllStarships
} = swapiService;

const PersonList = () => {

};

const PlanetList = () => {

};

const StarshipList = () => {

};

export {
  PersonList,
  PlanetList,
  StarshipList
};