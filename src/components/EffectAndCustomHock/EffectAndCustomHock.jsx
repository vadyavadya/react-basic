import { useState, useEffect } from 'react';
import { fetchData } from './api.js';
import {useSelectionOption} from './useSelectionOption.js';

export default function EffectAndCustomHock() {
  
  // Use castom Hook
  const [planetList, planetId, setPlanetId] = useSelectionOption('/planets');
  console.log('planetId: ', planetId);
  const [placeList, placeId, setPlaceId] =  useSelectionOption(planetId ? `/planets/${planetId}/places`: null);

  // Use use effect
  /* const [planetList, setPlanetList] = useState([])
  const [planetId, setPlanetId] = useState('');

  const [placeList, setPlaceList] = useState([]);
  const [placeId, setPlaceId] = useState('');

  useEffect(() => {
    let ignore = false;
    fetchData('/planets').then(result => {
      if (!ignore) {
        console.log('Fetched a list of planets.');
        setPlanetList(result);
        setPlanetId(result[0].id); // Select the first planet
      }
    });
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    if (planetId === '') {
      // Nothing is selected in the first box yet
      return;
    }
    let ignore = false;
      fetchData(`/planets/${planetId}/places`).then(result => {
        if (!ignore) {
          console.log(`Fetched a list of place ${planetId}.`);
          setPlaceList(result);
          setPlaceId(result[0].id); // Select the first planet
        }
      });
    return () => {
      ignore = true;
    }
  }, [planetId]); */

  return (
    <>
      <label>
        Pick a planet:{' '}
        <select value={planetId} onChange={e => {
          setPlanetId(e.target.value);
        }}>
          {planetList.map(planet =>
            <option key={planet.id} value={planet.id}>{planet.name}</option>
          )}
        </select>
      </label>
      <label>
        Pick a place:{' '}
        <select value={placeId} onChange={e => {
          setPlaceId(e.target.value);
        }}>
          {placeList.map(place =>
            <option key={place.id} value={place.id}>{place.name}</option>
          )}
        </select>
      </label>
      <hr />
      <p>You are going to: {placeId || '???'} on {planetId || '???'} </p>
    </>
  );
}