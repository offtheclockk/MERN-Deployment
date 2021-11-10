import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PirateList from '../components/PirateList';

const Main = (props) => {
          const [pirates, setPirates] = useState([]);
          const [loaded, setLoaded] = useState(false);
          const [errors, setErrors] = useState("");

          useEffect(() => {
                    axios.get('http://localhost:8000/api/pirates')
                              .then(res => {
                                        setPirates(res.data);
                                        setLoaded(true);
                              })
                              .catch(err => console.error(err));
          }, [loaded]);

          const removeFromDom = pirateId => {
                    setPirates(pirates.filter(pirate => pirate._id != pirateId));
          }

          return (
                    <div>
                              <Link to="/create">Add Pirate </Link>
                              {loaded && <PirateList pirates={pirates} removeFromDom={removeFromDom} loaded={setLoaded} />}
                    </div>
          );
}
export default Main;