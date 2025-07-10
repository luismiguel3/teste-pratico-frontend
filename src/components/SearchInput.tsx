interface SearchInputProps {
  onSearch: (value: string) => void;
  placeholder?: string;
}

export function SearchInput({ onSearch, placeholder = "Pesquisar" }: SearchInputProps) {
  return (
    <div className="relative w-full min-[768px]:max-w-md">
      <input
        type="text"
        placeholder={placeholder}
        className="px-5 w-full py-3.5 pr-12 border-1 border-gray-300 rounded-lg bg-white
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        onChange={(e) => onSearch(e.target.value)}
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <svg
          className="w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
}