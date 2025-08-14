import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subscribeLoading: false,
  isMenuOpen: false,
  contactLoading: false,
  isWhatwebuyDropDownOpen: false,
  isWhatwesellDropDownOpen: false,
  isEthicalExpanded: false,
  isUnmatchedQualityExpanded: false,
  isExceptionalValueExpanded: false, activeShape: false,
  isVibrantColorActive: false,
  isSuperiorCutActive: false,
  isExceptionalClarityActive: false,
  isBrilliantCutActive: false,
  subscribeMessage: { message: "", type: "" },
  contactMessage: { message: "", type: "" },
};

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setContactLoading: (state, action) => {
      state.contactLoading = action.payload;
    },
    setContactMessage: (state, action) => {
      state.contactMessage = action.payload;
    },
    setSubscribeLoading: (state, action) => {
      state.subscribeLoading = action.payload;
    },
    setSubscribeMessage: (state, action) => {
      state.subscribeMessage = action.payload;
    },
    setIsMenuOpen: (state, action) => {
      state.isMenuOpen = action.payload;
    },

    setIsWhatWeBuyDropDownOpen: (state, action) => {
      state.isWhatwebuyDropDownOpen = action.payload;
    },

    setIsWhatWeSellDropDownOpen: (state, action) => {
      state.isWhatwesellDropDownOpen = action.payload;
    },

    // Labgrown Page
    setIsEthicalExpanded: (state, action) => {
      state.isEthicalExpanded = action.payload;
    },
    setIsUnmatchedQualityExpanded: (state, action) => {
      state.isUnmatchedQualityExpanded = action.payload;
    },
    setIsExceptionalValueExpanded: (state, action) => {
      state.isExceptionalValueExpanded = action.payload;
    },

    setActiveShape: (state, action) => {
      state.activeShape = action.payload;
    },
    setIsVibrantColorActive: (state, action) => {
      state.isVibrantColorActive = action.payload;
    },
    setIsSuperiorCutActive: (state, action) => {
      state.isSuperiorCutActive = action.payload;
    },
    setIsExceptionalClarityActive: (state, action) => {
      state.isExceptionalClarityActive = action.payload;
    },
    setIsBrilliantCutActive: (state, action) => {
      state.isBrilliantCutActive = action.payload;
    },
  },
});

export const {
  setContactLoading,
  setContactMessage,
  setIsWhatWeBuyDropDownOpen,
  setIsWhatWeSellDropDownOpen,
  setIsMenuOpen,
  setSubscribeMessage,
  setSubscribeLoading,
  setIsEthicalExpanded,
  setIsUnmatchedQualityExpanded,
  setIsExceptionalValueExpanded,
  setActiveShape,
  setIsVibrantColorActive,
  setIsSuperiorCutActive,
  setIsExceptionalClarityActive,
  setIsBrilliantCutActive
} = commonSlice.actions;

export default commonSlice.reducer;
