import React from "react";
import CollectionItem from "../../components/collection-item/collection-item.component";

import "./collection.styles.scss";

const ColectionPage = ({ match }) => {
  console.log('ColectionPage ' + match.params.categoryId);
  return (
    <div className="category">
      <h2>CATEGORY PAGE</h2>
    </div>
  );
};

export default ColectionPage;
