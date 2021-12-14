import React from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import Footer from "../../components/footer/footer.component"


const ShopPage = ({ collections }) => (
    <div className='shop-page'>
        <CollectionsOverview />
        <Footer className="footer"/>
    </div>
)

export default ShopPage;