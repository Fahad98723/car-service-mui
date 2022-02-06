import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const carSlice = createSlice({
    name : 'cars',
    initialState : {
        count : 0,
        carsDetails : {}
    },
    reducers: {
        increment: (state) => {
          // Redux Toolkit allows us to write "mutating" logic in reducers. It
          // doesn't actually mutate the state because it uses the Immer library,
          // which detects changes to a "draft state" and produces a brand new
          // immutable state based off those changes
          state.count += 1
        },
        decrement: (state) => {
          state.count -= 1
        },
        incrementByAmount: (state, action) => {
          state.count += action.payload
        },
      },
})

export const { increment, decrement, incrementByAmount } = carSlice.actions

export default carSlice.reducer