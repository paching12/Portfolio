import { useInitContext } from "@contexts/InitContext/useInitContext";
import type { LANGUAGE_TYPES } from "@shared/types/Languages";
import classNames from "classnames";
import { useState } from "react";
import { Button } from "../Button";

const LanguageSelector = () => {
  const {
    setLanguage,
    language: currentLanguage,
    availableLanguages,
  } = useInitContext();
  const [dropdownActive, setDropdownActive] = useState<boolean>(false);

  const selectLanguageHandler = (item: LANGUAGE_TYPES) => {
    setLanguage(item);
    setDropdownActive((lastItem) => !lastItem);
  };

  const showLanguageOptionsHandler = () => {
    setDropdownActive((lastItem) => !lastItem);
  };

  return (
    <li className="flex-1 list-none content-center justify-center p-2 select-none">
      <div className="relative">
        <Button onClick={showLanguageOptionsHandler}>{currentLanguage}</Button>
        <ul
          className={classNames(
            {
              hidden: !dropdownActive,
            },
            "absolute",
          )}
        >
          {availableLanguages.map((item: LANGUAGE_TYPES, index: number) => (
            <li
              className="cursor-pointer text-white"
              key={`LanguageItem-${index}`}
              onClick={() => selectLanguageHandler(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default LanguageSelector;
