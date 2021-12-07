import useQuotes from "./useQuotes";

const ActionButtons = () => {
  const { loadData } = useQuotes();
  const { deleteAllQuotes } = useQuotes();

  return (
    <div className="flex justify-center gap-2 p-6">
      <input
        className="btn"
        type="button"
        value="Get a Quote!"
        onClick={loadData}
      />
      <input
        className="btn"
        type="button"
        value="Delete all Quotes"
        onClick={deleteAllQuotes}
      />
    </div>
  );
};

export default ActionButtons;
