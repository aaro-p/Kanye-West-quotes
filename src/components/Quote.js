import useQuotes from "./useQuotes";
import { TiDeleteOutline } from "react-icons/ti";

//<input className="btn-small" type="button" value="Delete" onClick={delete_quote}/>

const Quote = ({ quote }) => {
  const { deleteQuote } = useQuotes();
  const delete_quote = () => {
    deleteQuote({ quote });
  };

  return (
    <div className="quote-box container mx-auto my-1 bg-black rounded shadow-md text-white">
      <div className="font-mono quote-text">
        <p>"{quote.quote}"</p>
      </div>
      <div className="delete-button pr-2">
        <TiDeleteOutline className="button-icon" onClick={delete_quote} />
      </div>
    </div>
  );
};

export default Quote;
