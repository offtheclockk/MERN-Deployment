import React, { useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default props => {
          const { initialName, initialImage, initialTreasure, initialPhrase, initialPosition, initialPegLeg, initialEyePatch, initialHookHand, onSubmitProp } = props;
          const [name, setName] = useState(initialName);
          const [image, setImage] = useState(initialImage);
          const [treasure, setTreasure] = useState(initialTreasure);
          const [phrase, setPhrase] = useState(initialPhrase);
          const [position, setPosition] = useState("Captain");
          const [pegLeg, setPegLeg] = useState(initialPegLeg);
          const [eyePatch, setEyePatch] = useState(initialEyePatch);
          const [hookHand, setHookHand] = useState(initialHookHand);
          const [errors, setErrors] = useState("");
          const history = useHistory();

          const onSubmitHandler = e => {
                    e.preventDefault();
                    onSubmitProp({ name, image, treasure, phrase, position, pegLeg, eyePatch, hookHand, errors })
                    setName("")
                    setImage("")
                    setTreasure(0)
                    setPhrase("")
                    setPosition("")
                    setPegLeg("")
                    setEyePatch("")
                    setHookHand("")
          }

          const handleName = (e) => {
                    setName(e.target.value);

                    if (e.target.value.length < 2 && e.target.value.length !== 0) {
                              setErrors({
                                        name: {
                                                  message: "The name has to be minimum 2 characters!(Front-end)"
                                        }
                              })
                    }
                    else {
                              setErrors({});
                    }
          }

          const handleImage = (e) => {
                    setImage(e.target.value);

                    if (e.target.value.length < 2 && e.target.value.length !== 0) {
                              setErrors({
                                        image: {
                                                  message: "The image has to be minimum 2 characters!(Front-end)"
                                        }
                              })
                    }
                    else {
                              setErrors({});
                    }
          }

          const handlePhrase = (e) => {
                    setPhrase(e.target.value);

                    if (e.target.value.length < 10 && e.target.value.length !== 0) {
                              setErrors({
                                        phrase: {
                                                  message: "The Catch Phrase has to be minimum 10 characters!(Front-end)"
                                        }
                              })
                    }
                    else {
                              setErrors({});
                    }
          }

          return (
                    <form onSubmit={onSubmitHandler}>
                              <h1>Pirate Crew</h1>
                              <h2>Add a Pirate below:</h2>
                              <p>
                                        <label>Name</label><br />
                                        <input type="text" onChange={handleName} />
                              </p>
                              {errors?.name && (
                                        <p style={{ color: "red" }}>{errors.name?.message}</p>
                              )}
                              <p>
                                        <label>Image</label><br />
                                        <input type="text" onChange={handleImage} />
                              </p>
                              {errors?.image && (
                                        <p style={{ color: "red" }}>{errors.image?.message}</p>
                              )}
                              <p>
                                        <label>Treasure</label><br />
                                        <input type="number" onChange={(e) => setTreasure(e.target.value)} />
                              </p>
                              <p>
                                        <label>Phrase</label><br />
                                        <input type="text" onChange={handlePhrase} />
                              </p>
                              {errors?.phrase && (
                                        <p style={{ color: "red" }}>{errors.phrase?.message}</p>
                              )}
                              <p>
                                        <label for="positions">Choose a crew position:</label>
                                        <select name="position" id="position" onChange={(e) => setPosition(e.target.value)} value={position}>
                                                  <option value="captain">Captain</option>
                                                  <option value="first mate">First Mate</option>
                                                  <option value="quarter master">Quarter Master</option>
                                                  <option value="boatswain">Boatswain</option>
                                                  <option value="powder monkey">Powder Monkey</option>
                                        </select>
                              </p>
                              <div>
                                        <label>Peg Leg</label>
                                        <input type="checkbox" onChange={(e) => setPegLeg(!pegLeg)} checked={pegLeg} />
                              </div>
                              <div>
                                        <label>Eye Patch</label>
                                        <input type="checkbox" onChange={(e) => setEyePatch(!eyePatch)} checked={eyePatch} />
                              </div>
                              <div>
                                        <label>Hook Hand</label>
                                        <input type="checkbox" onChange={(e) => setHookHand(!hookHand)} checked={hookHand} />
                              </div>
                              <input type="submit" />
                    </form>
          )
}