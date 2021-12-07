import useQuotes from "./useQuotes";

const Filter = () => {
  const { setSearchVal, searchVal } = useQuotes();

  return (
    <div className="container py-3">
      <p className="pt-1">Word count filter</p>
      <input
        className="filter shadow-lg"
        type="number"
        value={searchVal}
        onChange={(e) => setSearchVal(e.target.value)}
      />
    </div>
  );
};

export default Filter;
