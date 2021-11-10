import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';

const PirateList = (props) => {
          const [pirates, setPirates] = useState([]);
          const { removeFromDom } = props;

          useEffect(() => {
                    axios.get(`http://localhost:8000/api/pirates`)
                              .then(res => setPirates(res.data));
          }, [props.pirates])

          return (
                    <div>
                              {pirates.map((pirate, i) => {
                                        return (
                                                  <p key={i}>
                                                            <Link to={"/pirates/" + pirate._id}>
                                                                      <p>Name: {pirate.name}</p>
                                                            </Link>
                                                            <img src={pirate.image} />
                                                            <p># of Treasures: {pirate.treasure}</p>
                                                            <p>Phrase: {pirate.phrase}</p>
                                                            <p>Position: {pirate.position}</p>
                                                            <p>Peg Leg: {pirate.pegLeg}</p>
                                                            <p>Eye Patch: {pirate.eyePatch}</p>
                                                            <p>Hook Hand: {pirate.hookHand}</p>
                                                            <Link to={"/pirates/" + pirate._id}>
                                                                      View Pirate
                                                            </Link>
                                                            |
                                                            <DeleteButton pirateId={pirate._id} successCallback={() => removeFromDom(pirate._id)} />
                                                            <hr />
                                                  </p>
                                        )
                              })}
                    </div>
          );
}

export default PirateList;