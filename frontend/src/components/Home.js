import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [grounds, setGrounds] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/grounds?search=${searchQuery}`);
      setGrounds(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {grounds.map((ground) => (
          <li key={ground.id}>
            <Link to={`/ground/${ground.id}`}>
              {ground.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;