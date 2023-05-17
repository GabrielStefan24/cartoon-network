import React from "react";

function InputComponent({ id, label, type, ...props }, ref) {
  return (
    <div className="relative">
      <input
        id={id}
        className="block rounded-md px-4 pt-6 pb-1 w-full text-md text-black bg-white appearance-none focus:outline-none peer "
        placeholder=" "
        type={type}
        ref={ref}
        {...props}
      />
      <label
        htmlFor={id}
        className="absolute text-md text-zinc-400 duration-150 transform -translate-y-3 scale-70 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
      >
        {label}
      </label>
    </div>
  );
}

const Input = React.forwardRef(InputComponent);
Input.displayName = "Input";

export default Input;