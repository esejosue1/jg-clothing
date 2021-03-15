import { connect } from "react-redux";
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux'; 
import {selectIsCollectionLoaded} from '../../redux/shop/shop.selector';
import withSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionPage from './collection.component';

//gets the props 
const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionLoaded(state)
});

const CollectionPageContainer = compose (
    connect(mapStateToProps),
    withSpinner
)(CollectionPage)

export default CollectionPageContainer
