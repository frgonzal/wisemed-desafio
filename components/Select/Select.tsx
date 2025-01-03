'use client';

interface SelectProps {
  title: string;
  content: string[];
  id?: string;
}

function Select({ title, content, id}: SelectProps) {
  return (
    <div className="relative w-full">
      <label
        htmlFor={id ? id : title}
        className="text-blue-600 text-sm font-semibold"
      >
        {title}
      </label>

      <div>

      </div>

      <div className="relative">
        <select
          id={id ? id : title}
          name={title}
          className="w-full appearance-none border border-blue-500 rounded-md p-3 text-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 cursor-pointer"
          defaultValue=""
        >
          <option value="">
            Seleccionar
          </option>
          {
            content.map((item, index) => (
              <option key={index} value={item}>{item}</option>
            ))
          }
        </select>

        <svg
          className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-500 pointer-events-none"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
}

export default Select;
