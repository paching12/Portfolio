import { useInitContext } from "@contexts/InitContext/useInitContext";
import type { LANGUAGE_TYPES } from "@shared/types/Languages";
import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import { Button } from "../Button";
import "./LanguageSelector.css";

const LanguageSelector = () => {
  const {
    setLanguage,
    language: currentLanguage,
    availableLanguages,
  } = useInitContext();
  const [dropdownActive, setDropdownActive] = useState<boolean>(false);
  const [buttonWidth, setButtonWidth] = useState<number | undefined>(undefined);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (buttonRef.current) {
      setButtonWidth(buttonRef.current.getBoundingClientRect().width);
    }
  }, [dropdownActive]);

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
        <Button
          onClick={showLanguageOptionsHandler}
          ref={buttonRef}
          style={classNames(
            {
              "rounded-lg": !dropdownActive,
              "rounded-t-lg": dropdownActive,
            },
            "pl-3",
          )}
        >
          <span className="whitespace-nowrap">
            {" "}
            {currentLanguage.toLocaleUpperCase()} ▼
          </span>
        </Button>
        <ul
          className={classNames(
            {
              hidden: !dropdownActive,
            },
            "absolute rounded-b-lg backdrop-blur-3xl",
          )}
          style={buttonWidth ? { width: buttonWidth } : undefined}
        >
          {availableLanguages.map((item: LANGUAGE_TYPES, index: number) => (
            <li
              className={classNames(
                {
                  "rounded-b-lg": index + 1 === availableLanguages.length,
                },
                "dropdown-content",
              )}
              key={`LanguageItem-${index}`}
              onClick={() => selectLanguageHandler(item)}
            >
              <span
                className={classNames({
                  "border-t-text-muted border-t px-2": index,
                })}
              >
                {item.toLocaleUpperCase()}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default LanguageSelector;
