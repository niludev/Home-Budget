import React, { Children, useId } from "react";

type SelectBoxoption = {
  value: any;
  text: string;
  disabled?: boolean;
};

type SelectBoxProps = {
  name: string;
  required: boolean;
  className: string;
  value: any;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  fistOptionText: string;
  options: SelectBoxoption[];
};

const SelectBox: React.FC<SelectBoxProps> = ({
  name,
  required,
  className,
  value,
  onChange,
  fistOptionText,
  options,
}) => {
  return (
    <select
      name={name}
      required={required}
      className={className}
      value={value}
      onChange={onChange}
    >
      <option value={0} disabled={true}>
        {fistOptionText}
      </option>
      {options.map((opt) => (
        <option key={useId()} disabled={opt.disabled} value={opt.value}>
          {opt.text}
        </option>
      ))}
    </select>
  );
};

export default SelectBox;
