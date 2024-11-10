import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const GroundDetails = () => {
  const { id } = useParams();
  const [ground, setGround] = useState(null);

  useEffect(() => {
    const fetchGround = async () => {
      try {
        const response = await axios.get(`/api/grounds/${id}`);
        setGround(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchGround();
  }, [id]);

  return (
    <div>
      {ground ? (
        <div>
          <h2>{ground.name}</h2>
          <p>{ground.address}</p>
          {/* ... other ground details */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default GroundDetails;