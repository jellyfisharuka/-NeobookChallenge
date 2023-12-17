// В файле YourComponent.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function YourComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://neobook.online/mobi-market/api/users/login', {
      headers: {
        'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        // Обработка ошибок
      });
  }, []);

  return (
    <div>
      {data && (
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default YourComponent;
