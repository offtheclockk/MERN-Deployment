import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PirateForm from '../components/PirateForm';
import { useHistory } from 'react-router-dom';

const Create = (props) => {
          const [pirates, setPirates] = useState([]);
          const [loaded, setLoaded] = useState(false);
          const [errors, setErrors] = useState("");
          const history = useHistory();

          useEffect(() => {
                    axios.get('http://localhost:8000/api/pirates')
                              .then(res => {
                                        setPirates(res.data);
                                        setLoaded(true);
                              })
                              .catch(err => console.error(err));
          }, [loaded]);

          const createPirate = pirate => {
                    axios.post('http://localhost:8000/api/pirate', pirate)
                              .then(res => {
                                        setPirates([...pirates, res.data]);
                                        history.push("/");
                              })
                              .catch(err => {
                                        setErrors(err.response.data.errors);
                              })
          }

          return (
                    <div>
                              {errors?.name && (
                                        <p style={{ color: "red" }}>{errors.name?.message}</p>
                              )}
                              {errors?.image && (
                                        <p style={{ color: "red" }}>{errors.image?.message}</p>
                              )}
                              {errors?.treasure && (
                                        <p style={{ color: "red" }}>{errors.treasure?.message}</p>
                              )}
                              {errors?.phrase && (
                                        <p style={{ color: "red" }}>{errors.phrase?.message}</p>
                              )}
                              {errors?.position && (
                                        <p style={{ color: "red" }}>{errors.position?.message}</p>
                              )}
                              <PirateForm onSubmitProp={createPirate} initialName="" initialImage="" initialTrease="" initialPhrase="" initialPosition="" initialPegLeg="true" initialEyePatch="true" initialHookHand="true" loaded={setLoaded} errors={errors} />
                              <hr />
                    </div>
          );
}
export default Create;