import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CarProps, OptionsProps } from "../App";

interface BuilderState {
  alertSet: boolean;
  selectedCar: CarProps;
  step: number;
  colorSelected: number;
  totalPrice: number;
}

const initialState: BuilderState = {
  alertSet: false,
  selectedCar: {
    id: 0,
    title: "",
    price: 0,
    options: [
      {
        id: 0,
        title: "",
        img: "",
        colorCode: "",
        price: 0,
      },
    ],
  },
  step: 1,
  colorSelected: 1,
  totalPrice: 0,
};

export const builderSlice = createSlice({
  name: "builder",
  initialState,
  reducers: {
    setAlert: (state, action: PayloadAction<boolean>) => {
      state.alertSet = action.payload;
    },
    selectCar: (state, action: PayloadAction<CarProps>) => {
      state.selectedCar = action.payload;
    },
    selectCarOption: (state, action: PayloadAction<OptionsProps>) => {
      state.selectedCar.options.pop();
      state.selectedCar.options.push(action.payload);
    },
    selectCarReset: () => initialState,
    setStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload;
    },
    setColorSelected: (state, action: PayloadAction<number>) => {
      state.colorSelected = action.payload;
    },
    setTotalPrice: (state, action: PayloadAction<number>) => {
      state.totalPrice = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setAlert,
  selectCar,
  selectCarReset,
  selectCarOption,
  setStep,
  setColorSelected,
  setTotalPrice,
} = builderSlice.actions;

export default builderSlice.reducer;
