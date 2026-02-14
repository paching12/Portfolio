import { useInitContext } from "@contexts/InitContext/useInitContext";
import type { LANGUAGE_TYPES } from "@shared/types/Languages";
import { useCallback } from "react";
import "./LanguageSelector.css";
import Dropdown from "@components/molecules/Dropdown/Dropdown";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import classNames from "classnames";

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
        value={currentLanguage as LANGUAGE_TYPES}
        onChange={selectLanguageHandler}
        rounded
        options={availableLanguages}
        style="w-20"
        renderItems={(item: LANGUAGE_TYPES, index = 0) => {
          const [language, location] = item.split("-");
          return (
            <div
              className={classNames(
                {
                  "dropdown-line": index,
                },
                "flex w-full justify-between py-0.5",
              )}
            >
              <div className="flex px-2 py-1.5">
                <span
                  className={`fi fi-${location} fis flag-circle rounded-full`}
                ></span>
              </div>
              <div className="flex flex-1 content-center items-center justify-center">
                <span className="language-label">
                  {language.toLocaleUpperCase()}
                </span>
              </div>
            </div>
          );
        }}
      />
    </li>
  );
};

export default LanguageSelector;
