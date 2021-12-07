import Quote from "./Quote";
import useQuotes from "./useQuotes";
import Filter from "./Filter";
import Counters from "./Counters";

const QuoteList = () => {
  const { filteredData } = useQuotes();
  const { totalQuoteCount, quoteViewCount } = useQuotes();

  return (
    <div className="container mx-auto max-w-3xl">
      <div className="text-center font-mono pb-8">
        <Filter />
        <Counters />
      </div>
      <div className="list font-mono text-2xl overflow-y-auto text-center">
        {totalQuoteCount !== 0 && quoteViewCount !== 0 ? (
          filteredData.map((quote, index) => {
            return <Quote key={index + "-" + quote} quote={quote} />;
          })
        ) : (
          <p className="py-48">no quotes!</p>
        )}
      </div>
    </div>
  );
};

export default QuoteList;
