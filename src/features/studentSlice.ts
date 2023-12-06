// studentSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface MyDataState {
  data: any[]
  loading: boolean
  error: any
}

const initialState: MyDataState = {
  data: [],
  loading: false,
  error: null,
}

export const studentSlice = createSlice({
  name: "myData",
  initialState,
  reducers: {
    getDataStart: (state) => {
      state.loading = true
      state.error = null
    },
    getDataSuccess: (state, action: PayloadAction<any[]>) => {
      state.data = action.payload
      state.loading = false
    },
    getDataFailure: (state, action: PayloadAction<any>) => {
      state.error = action.payload
      state.loading = false
    },
    createData: (state, action: PayloadAction<any>) => {
      // Simulate creation locally
      state.data = [
        ...state.data,
        { ...action.payload, id: state.data.length + 1 },
      ]
    },
    updateData: (state, action: PayloadAction<any>) => {
      // Simulate update locally
      const updatedData = state.data.map((item) =>
        item.id === action.payload.id ? { ...item, ...action.payload } : item,
      )
      state.data = updatedData
    },
    deleteData: (state, action: PayloadAction<any>) => {
      // Simulate deletion locally
      const filteredData = state.data.filter(
        (item) => item.id !== action.payload,
      )
      state.data = filteredData
    },
  },
})

export const studentActions = studentSlice.actions
export const studentReducer = studentSlice.reducer
