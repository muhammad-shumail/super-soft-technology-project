import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit"
import { studentSlice } from "../features/studentSlice"

export const store = configureStore({
  reducer: {
    students: studentSlice.reducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
