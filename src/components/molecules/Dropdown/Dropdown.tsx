import { Button } from "@components/atoms/Button";
import { memo, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import type { DropdownProps } from "./Dropdown.types";

const Dropdown = <Type extends string | number | boolean>({
  rounded = false,
  onChange,
  options = [],
  value,
  style,
  renderItems,
}: DropdownProps<Type>) => {
  const [dropdownActive, setDropdownActive] = useState<boolean>(false);
  const [buttonWidth, setButtonWidth] = useState<number | undefined>(undefined);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (buttonRef.current) {
      setButtonWidth(buttonRef.current.getBoundingClientRect().width);
    }
  }, [dropdownActive]);

  const showOptions = () => {
    setDropdownActive((lastItem) => !lastItem);
  };

  const selectHandler = (item: Type) => {
    onChange(item);
    setDropdownActive((lastItem) => !lastItem);
  };

  return (
    <div className="relative">
      <Button
        onClick={showOptions}
        ref={buttonRef}
        style={classNames(
          {
            "rounded-lg": !dropdownActive && rounded,
            "rounded-t-lg": dropdownActive && rounded,
          },
          `pl-3 ${style}`,
        )}
      >
        <span className="flex whitespace-nowrap">
          {renderItems ? renderItems(value) : value}
        </span>
      </Button>

      {options?.length !== undefined && (
        <ul
          className={classNames(
            {
              hidden: !dropdownActive,
              "rounded-b-lg": rounded,
            },
            "absolute backdrop-blur-3xl",
          )}
          style={buttonWidth ? { width: buttonWidth } : undefined}
        >
          {options.map((item, index: number) => (
            <li
              className={classNames({
                "rounded-b-lg": index + 1 === options.length && rounded,
                "dropdown-content": renderItems,
              })}
              key={`DropdownItem-${String(item)}`}
              onClick={() => selectHandler(item)}
            >
              {renderItems ? (
                renderItems(item, index)
              ) : (
                <span
                  className={classNames({
                    "border-t-text-muted border-t": index,
                  })}
                >
                  {item}
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default memo(Dropdown) as typeof Dropdown;
