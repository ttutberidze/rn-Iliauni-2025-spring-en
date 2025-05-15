import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [] // Array of movie objects
}

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        toggleFavorites: (state, actions) => {
            const movieIndex = state.movies.findIndex((movie) => movie.id === actions.payload.movie.id)
            if(movieIndex !== -1) {
                state.movies.splice(movieIndex, 1)
            } else {
                state.movies.push(actions.payload.movie)
            }
        }
    }
})
export const {toggleFavorites} = favoriteSlice.actions
export default favoriteSlice.reducer