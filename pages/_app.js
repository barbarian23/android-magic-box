import '../styles/globals.css'
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createWrapper } from 'next-redux-wrapper';

import rootReducer from "../reducer";
import rootSaga from "../saga";

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resources from '../service/i18n/i18n.service';

export const makeStore = (context) => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
}

const wrapper = createWrapper(makeStore, { debug: true })


i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: ['en', 'kr', 'vn'],
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
