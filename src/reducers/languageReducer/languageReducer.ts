import { LANGUAGES } from "@shared/types/Languages";
import type { LanguageStateTypes } from "./languageReducer.types";
import {
  ActionPayloadTypes,
  type ActionLanguageReducer,
} from "@actions/languages";

export const initialState = {
  currentLanguage: LANGUAGES.en,
};

export const LanguageReducer = (
  state: LanguageStateTypes,
  action: ActionLanguageReducer,
) => {
  switch (action.type) {
    case ActionPayloadTypes.SET_LANGUAGE:
      if (action.payload === state.currentLanguage) {
        return state;
      }
      return {
        ...state,
        currentLanguage: action.payload,
      };
    default:
      throw new Error("Unknown action type sent on LanguageReducer");
  }
};
