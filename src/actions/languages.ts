import type { LANGUAGE_TYPES } from "@shared/types/Languages";

export const ActionPayloadTypes = {
  SET_LANGUAGE: "set/language",
  UPDATE_LANGUAGE_LIST: "update/languageList",
} as const;

export type ActionLanguagePayloadTypes =
  (typeof ActionPayloadTypes)[keyof typeof ActionPayloadTypes];

export type ActionLanguageContent = {
  [ActionPayloadTypes.SET_LANGUAGE]: LANGUAGE_TYPES;
  [ActionPayloadTypes.UPDATE_LANGUAGE_LIST]: LANGUAGE_TYPES[];
};

export type ActionLanguage = {
  [T in keyof ActionLanguageContent]: {
    type: T;
    payload: ActionLanguageContent[T];
  };
}[keyof ActionLanguageContent];

export type ActionLanguageReducer = ActionLanguage;
