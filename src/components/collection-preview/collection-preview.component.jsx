import React from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';
import useWindowDimensions from '../get-dimentions/get-dimentions.component';

import Line from '../line/line.component';

import {
    CollectionPreviewContainer,
    TitleContainer,
    PreviewContainer
} from './collection-preview.styles';

const CollectionPreview = ({ title, items, history, match, routeName }) => {
    const { width } = useWindowDimensions();
    return(
    <CollectionPreviewContainer>
        <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>
            {title.toUpperCase()}
            <Line />
        </TitleContainer>
        <PreviewContainer>
            {items
                .filter((item, idx) => idx < (width <= 1400? width<= 700? 2: 3 : 4) )
                .map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))}
        </PreviewContainer>
    </CollectionPreviewContainer>)
};

export default withRouter(CollectionPreview);