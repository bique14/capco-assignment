interface SearchInputProps {
  _onChange: (query: string) => void;
}

const SearchInput = (props: SearchInputProps) => {
  const { _onChange } = props;

  return (
    <input
      className="w-full p-2 rounded-sm text-black"
      placeholder="Search..."
      onChange={e => _onChange(e.target.value)}
    />
  );
};

export default SearchInput;
