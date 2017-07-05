import { applyMiddleware } from 'redux';
import QuoteMiddleware from './quote_middleware';
import { client } from '../reducers/root_reducer';

const RootMiddleware = applyMiddleware(QuoteMiddleware, client.middleware());

export default RootMiddleware
