import React from 'react';

const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1>Homepage</h1>
      <p>This is the homepage content.</p>
      <Link to="/menu" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Go to Menu
      </Link>
    </div>
  );
};

export default HomePage;
