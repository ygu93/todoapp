import Nav from './nav';
import {connect} from 'react-redux';
import { requestQuote } from '../../actions/quote_actions';

const mapStateToProps = (state) => ({
  quote: state.quote
});

const mapDispatchToProps = (dispatch) => ({
    requestQuote:() => dispatch(requestQuote()),
});






export default connect(mapStateToProps, mapDispatchToProps)(Nav);
