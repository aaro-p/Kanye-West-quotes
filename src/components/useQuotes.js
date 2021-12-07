import { useContext, useEffect } from "react";
import { AppContext } from "../appContext";

const useQuotes = () => {
  const [state, setState] = useContext(AppContext);

  useEffect(() => {
    filterQuotes();
    //eslint-disable-next-line
  }, [state.searchVal, state.quoteData]);

  const loadData = async () => {
    const API = "https://api.kanye.rest/";
    let rsp = await fetch(API);
    let fetchedQuote = await rsp.json();

    saveQuotes(fetchedQuote);
    console.log("Fetched quote: " + fetchedQuote.quote);
    console.log(
      "Word count of fetched quote: " + fetchedQuote.quote.split(" ").length
    );
  };

  const filterQuotes = () => {
    let filtered = state.quoteData.filter((item) => {
      if (parseInt(state.searchVal) <= item.quote.split(" ").length)
        return item.quote;
      return false;
    });
    setState({ ...state, filteredData: filtered });
  };

  const saveQuotes = (quote) => {
    let fetchedQuote = [...state.quoteData, quote];
    setState({ ...state, quoteData: fetchedQuote });
  };

  const setSearchVal = (value) => {
    if (value > 0) {
      setState({ ...state, searchVal: value });
    }
  };

  const deleteAllQuotes = () => {
    setState({ ...state, quoteData: [] });
  };

  const deleteQuote = (q) => {
    let quotesToDelete = state.quoteData.filter((quote) => quote !== q.quote);
    setState({ ...state, quoteData: quotesToDelete });
  };

  return {
    loadData,
    deleteAllQuotes,
    deleteQuote,
    setSearchVal,
    filteredData: state.filteredData,
    totalQuoteCount: state.quoteData.length,
    searchVal: state.searchVal,
    quoteViewCount: state.filteredData.length,
  };
};

export default useQuotes;
