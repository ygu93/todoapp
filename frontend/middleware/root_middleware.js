import { applyMiddleware } from 'redux';
import { client } from '../reducers/root_reducer';

const RootMiddleware = applyMiddleware(client.middleware());

export default RootMiddleware
