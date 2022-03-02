import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ICarState = {
  id: number | undefined;
  title: string;
  img: string;
  price: number | undefined;
};

type IBuilderState = {
  selectedCar: ICarState;
};

const initialState: IBuilderState = {
  selectedCar: {
    id: undefined,
    title: "",
    img: "",
    price: undefined,
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
