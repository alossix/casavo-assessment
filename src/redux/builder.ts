import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AccessoriesProps, CarProps, OptionsProps } from "../App";

interface BuilderState {
  alertSet: boolean;
  colorSelected: number;
  selectedAccessories: AccessoriesProps[];
  selectedModel: CarProps;
  step: number;
  totalPrice: number;
}

const initialState: BuilderState = {
  alertSet: false,
  colorSelected: 1,
  selectedAccessories: [],
  selectedModel: {
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
    accessories: [],
  },
  step: 1,
  totalPrice: 0,
};

export const builderSlice = createSlice({
  name: "builder",
  initialState,
  reducers: {
    addAccessory: (state, action: PayloadAction<AccessoriesProps>) => {
      state.selectedAccessories.push(action.payload);
    },
    removeAccessory: (state, action: PayloadAction<number>) => {
      const index = state.selectedAccessories
        .map((accessory) => accessory.id)
        .indexOf(action.payload);
      state.selectedAccessories.splice(index, 1);
    },
    setAlert: (state, action: PayloadAction<boolean>) => {
      state.alertSet = action.payload;
    },
    selectCar: (state, action: PayloadAction<CarProps>) => {
      state.selectedModel = action.payload;
    },
    selectCarOption: (state, action: PayloadAction<OptionsProps>) => {
      state.selectedModel.options.pop();
      state.selectedModel.options.push(action.payload);
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
  addAccessory,
  removeAccessory,
  setAlert,
  selectCar,
  selectCarReset,
  selectCarOption,
  setStep,
  setColorSelected,
  setTotalPrice,
} = builderSlice.actions;

export default builderSlice.reducer;
