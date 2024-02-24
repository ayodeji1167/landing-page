import React from 'react';
import Filter from './Filter';
import PropertiesListing from './PropertiesListing';
import TopBanner from './TopBanner';

export default function page() {
  return (
    <div>
      <TopBanner name="Explore Our Diverse Portfolio of Properties" />
      <Filter />
      <PropertiesListing />
    </div>
  );
}
