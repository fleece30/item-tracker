import React from "react";

interface TextInputProps {
  type: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  classes?: string;
  value?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  type,
  placeholder,
  onChange,
  classes,
  value,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`px-6 py-4 w-full outline-none border-b-[1px] border-gray-200 md:w-1/4 focus:border-gray-700 transition duration-300 ${classes}`}
      onChange={onChange}
      value={value}
    />
  );
};

export default TextInput;
