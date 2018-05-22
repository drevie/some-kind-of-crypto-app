import { combineEpics } from 'redux-observable';
import { fetchLatestMarketDataEpic, fetchHistoricalMarketDataEpic } from './marketDataEpics';
import { createNewMessageEpic } from './chatBotEpics';

/*
type rootEpicTypes = typeof fetchLatestMarketDataEpic
    | typeof fetchHistoricalMarketDataEpic;

*/

// Avoid type safety here as they have not made
// combine epics typesafe yet

// tslint:disable-next-line:no-any
const rootEpic = combineEpics<any>(
    fetchLatestMarketDataEpic,
    fetchHistoricalMarketDataEpic,
    createNewMessageEpic,

);

export {
    fetchLatestMarketDataEpic,
    fetchHistoricalMarketDataEpic,
    rootEpic,
};