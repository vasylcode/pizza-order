import React from 'react';
import ContentLoader from 'react-content-loader';

function PizzaLoadingBlock () {
  return (
        <ContentLoader
            speed={2}
            width={342}
            height={452}
            viewBox="0 0 342 452">
            <circle cx="132" cy="142" r="115" />
            <rect x="0" y="273" rx="6" ry="6" width="280" height="26" />
            <rect x="0" y="310" rx="6" ry="6" width="280" height="84" />
            <rect x="0" y="418" rx="6" ry="6" width="91" height="31" />
            <rect x="137" y="408" rx="25" ry="25" width="140" height="46" />
        </ContentLoader>
  );
}

export default PizzaLoadingBlock;