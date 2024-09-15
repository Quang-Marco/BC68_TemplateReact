import React from "react";

const InputCustom = ({
  contentLabel,
  placeholder,
  name,
  value,
  onChange,
  type = "text",
  classWrapper = "",
  errors,
  touched,
  onBlur,
}) => {
  return (
    <div className={classWrapper}>
      <label className="block mb-2 text-sm font-medium text-white">
        {contentLabel}
      </label>
      <input
        type={type}
        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
          errors && touched ? "border-red-500" : ""
        }`}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      />
      {errors && touched && <span className="text-red-500 mt-2">{errors}</span>}
    </div>
  );
};

export default InputCustom;
