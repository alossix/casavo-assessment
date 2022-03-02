import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ICarState = {
  id: number | undefined;
  title: string;
  img: string;
  price: number;
};

type IBuilderState = {
  selectedCar: ICarState;
};

const initialState: IBuilderState = {
  selectedCar: {
    id: 0,
    title: "",
    img: "",
    price: 0,
  },
};

export const builderSlice = createSlice({
  name: "builder",
  initialState,
  reducers: {
    selectCar: (state, action: PayloadAction<ICarState>) => {
      state.selectedCar = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { selectCar } = builderSlice.actions;

export default builderSlice.reducer;
