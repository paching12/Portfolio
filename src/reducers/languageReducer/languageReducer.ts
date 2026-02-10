import { LANGUAGES } from "@shared/types/Languages";
import type { LanguageStateTypes } from "./languageReducer.types";
import {
  ActionPayloadTypes,
  type ActionLanguageReducer,
} from "@actions/languages";
import { getNewLanguageList } from "@utils/locales/LanguagesHelpers";
import { languageNames } from "@utils/locales/settings";

export const initialState = {
  currentLanguage: LANGUAGES.en,
  availableLanguages: [LANGUAGES.en, LANGUAGES.es],
};

export const LanguageReducer = (
  state: LanguageStateTypes,
  action: ActionLanguageReducer,
) => {
  switch (action.type) {
    case ActionPayloadTypes.SET_LANGUAGE:
      return {
        ...state,
        currentLanguage: action.payload,
        availableLanguages: getNewLanguageList(languageNames, action.payload),
      };
    default:
      throw new Error("Unknown action type sent on LanguageReducer");
  }
};
