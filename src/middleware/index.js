import thunk from "redux-thunk";
import logger from './logger';
import { applyMiddleware } from "redux";

// Middleware to be applied to redux store
export default applyMiddleware(
    thunk,
    logger,
);