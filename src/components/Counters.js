import useQuotes from "./useQuotes";

const Counters = () => {
  const { totalQuoteCount, quoteViewCount } = useQuotes();
  return (
    <div className="flex justify-between max-w-3xl mx-auto font-mono pt-10">
      <p className="counter pt-1">Total quote count: {totalQuoteCount} </p>
      <h1 className="font-mono text-2xl">QUOTES: </h1>
      <p className="counter pt-1">Quotes in view: {quoteViewCount} </p>
    </div>
  );
};

export default Counters;
