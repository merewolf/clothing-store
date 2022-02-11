import React from 'react';
import {CollectionPreviewContainer} from './collection-preview.styles'
import CollectionItem from '../collection-item/collection-item.component';


const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContainer>
    <h1>{title.toUpperCase()}</h1>
    <div>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </CollectionPreviewContainer>
);

export default CollectionPreview;
