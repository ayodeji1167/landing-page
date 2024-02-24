import React from 'react';
import ExploreMore from './ExploreMore';
import Filter from './Filter';
import PropertiesListing from './PropertiesListing';

export default function page() {
  return (
    <div>
      <ExploreMore />
      <Filter />
      <PropertiesListing />
    </div>
  );
}
