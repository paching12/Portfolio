import { useInitContext } from "@contexts/InitContext/useInitContext";
import type { LANGUAGE_TYPES } from "@shared/types/Languages";
import { useCallback } from "react";
import "./LanguageSelector.css";
import Dropdown from "@components/molecules/Dropdown/Dropdown";

const LanguageSelector = () => {
  const {
    setLanguage,
    language: currentLanguage,
    availableLanguages,
  } = useInitContext();

  const selectLanguageHandler = useCallback(
    (item: LANGUAGE_TYPES) => {
      setLanguage(item);
    },
    [setLanguage],
  );

  return (
    <li className="language-container">
      <Dropdown
        options={availableLanguages}
        value={currentLanguage}
        onChange={selectLanguageHandler}
        rounded
      />
    </li>
  );
};

export default LanguageSelector;
