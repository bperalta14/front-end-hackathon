import React from 'react';
import Map from './Map'; // Adjust the import path as necessary

const Main = () => {
 return (
    <main>
      <section>
        <h2>Find Food Donations Near You</h2>
        <p>Our app connects you with local food donation centers and events. Help reduce food waste and support your community.</p>
      </section>
      <Map />
    </main>
 );
};

export default Main;
