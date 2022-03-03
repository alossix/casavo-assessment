import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICarProps } from "../App";

type IBuilderState = {
  alertSet: boolean;
  selectedCar: ICarProps;
  step: number;
  colorSelected: boolean;
};

const initialState: IBuilderState = {
  alertSet: false,
  selectedCar: {
    id: 0,
    title: "",
    price: 0,
    options: [
      {
        title: "",
        img: "",
        colorCode: "",
        price: 0,
      },
    ],
  },
  step: 1,
  colorSelected: false,
};

export const builderSlice = createSlice({
  name: "builder",
  initialState,
  reducers: {
    setAlert: (state, action: PayloadAction<boolean>) => {
      state.alertSet = action.payload;
    },
    selectCar: (state, action: PayloadAction<ICarProps>) => {
      state.selectedCar = action.payload;
    },
    selectCarReset: () => initialState,
    setStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload;
    },
    setColorSelected: (state, action: PayloadAction<boolean>) => {
      state.colorSelected = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setAlert,
  selectCar,
  selectCarReset,
  setStep,
  setColorSelected,
} = builderSlice.actions;

export default builderSlice.reducer;
