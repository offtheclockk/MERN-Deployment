import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link, useHistory } from "react-router-dom";

const Detail = (props) => {
          const [pirate, setPirate] = useState({})
          const { id } = useParams();
          const history = useHistory();

          useEffect(() => {
                    axios.get('http://localhost:8000/api/pirates/' + id)
                              .then(res => setPirate(res.data))
                              .catch(err => console.error(err));
          }, []);

          const { removeFromDom } = props;
          const deleteProduct = (pirateId) => {
                    axios.delete('http://localhost:8000/api/pirates/' + pirateId)
                              .then(res => {
                                        removeFromDom(pirateId)
                              })
                              .catch(err => console.error(err));
                    history.push('/');
          }

          return (
                    <div>
                              <p>Name: {pirate.name}</p>
                              <img src={pirate.image} />
                              <p># of Treasures: {pirate.treasure}</p>
                              <p>Phrase: {pirate.phrase}</p>
                              <p>Position: {pirate.position}</p>
                              <p>Peg Leg: {pirate.pegLeg}</p>
                              <p>Eye Patch: {pirate.eyePatch}</p>
                              <p>Hook Hand: {pirate.hookHand}</p>
                              <Link to={`/pirates/${pirate._id}`}>
                                        View Pirate
                              </Link>
                              <button onClick={(e) => { deleteProduct(pirate._id) }}>
                                        Walk the Plank!
                              </button>
                    </div>
          )
}

export default Detail;

