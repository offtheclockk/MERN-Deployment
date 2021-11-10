import React from 'react'
import axios from 'axios';

export default props => {

          const { pirateId, successCallback } = props;

          const deletePirate = e => {
                    axios.delete('http://localhost:8000/api/pirates/' + pirateId)
                              .then(res => {
                                        successCallback();
                              })
          }

          return (
                    <button onClick={deletePirate}>
                              Walk the Plank!
                    </button>
          )
}

