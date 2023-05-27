import { configureStore } from '@reduxjs/toolkit';
import searchProduct from '../components/SearchSlice'

const rootReducer = {
    search:searchProduct
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;