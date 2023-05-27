import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// export const fetchDetailplayList = createAsyncThunk('music/fetchDetailplayList', async (pid) => {
//     const response = await musicApi.apiGetDetailPlayList({ id: pid });
//     return response.data.items;
// });

const bannerSlice = createSlice({
    name: 'search',
    initialState: {
        SearchProduct:[],
        SearchName:null
    },
    reducers: {
        
        SearchProductList(state, action) {
            return { ...state, SearchProduct: action.payload || null };
        },
        SearchName(state, action) {
            return { ...state, SearchName: action.payload || null };
        },
    },

    // extraReducers: (builder) => {
    //     builder.addCase(fetchDetailplayList.fulfilled, (state, action) => {
    //         // console.log("API",action.payload)
    //         state.songs = action.payload;
    //     });
    // },
});

const { actions, reducer } = bannerSlice;
export const { SearchProductList, SearchName } = actions;
export default reducer;