export interface DropdownProps<Type> {
  rounded?: boolean;
  onChange: (item: Type) => void;
  options: Type[];
  value: Type;
}
