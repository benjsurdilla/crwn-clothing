import React from "react";
import { Route } from "react-router-dom";
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";
import WithSpinner from "../../components/with-spinner/with-spinner.component.jsx";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.container";


class ShopPage extends React.Component {
    componentDidMount() {
        const { fetchCollectionsStart } = this.props;
        fetchCollectionsStart();

    }

    render() {
        const { match } = this.props;
        return (
            <div className='shop-page'>
                <Route
                    exact
                    path={`${match.path}`}
                   component={CollectionsOverviewContainer}
                />
                <Route
                    path={`${match.path}/:collectionId`}
                    components={CollectionPageContainer}
                />
            </div>
        );
    }


}

const mapStateToProps = createStructuredSelector({
    
    isCollectionsLoaded: selectIsCollectionsLoaded

});

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShopPage);