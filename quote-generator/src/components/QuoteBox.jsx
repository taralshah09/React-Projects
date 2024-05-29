import styled from "styled-components";

const QuoteBox = ({color,generateQuote,quote}) => {
  const padding = "25px";

  const shareOnTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `"${quote.content}" - ${quote.author}`
    )}`;
    window.open(twitterUrl, "_blank");
  };

  const shareOnTumblr = () => {
    const tumblrUrl = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=${encodeURIComponent(quote.author)}&content=${encodeURIComponent(quote.content)}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`;
    window.open(tumblrUrl, "_blank");
  };

  const shareOnWhatsApp = () => {
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      `"${quote.content}" - ${quote.author}`
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div id="quote-box">
      <QuoteContainer color={color} quote={quote}>
        <Quote color={color} quoteLength={quote.content ? quote.content.length : 0}>
          <i className="fa-solid fa-quote-left"></i>
          <h2 id="quote">
            {/* An appeaser is one who feeds a crocodile, hoping it will eat him
            last. */}
            {quote.content}

            {!quote.content ? "An appeaser is one who feeds a crocodile, hoping it will eat him last." : quote.content }
          </h2>
        </Quote>
        <p id="author">

            {quote.author ? quote.author : "Winston Churchil"}
            </p>

        <ButtonsBox color={color}>
            <div className="social-btns">
                <button id="twitter" onClick={shareOnTwitter}><i className="fa-brands fa-twitter"></i></button>
                <button id="tumblr" onClick={shareOnTumblr}><i className="fa-brands fa-tumblr"></i></button>
                <button id="whatsapp" onClick={shareOnWhatsApp}><i className="fa-brands fa-whatsapp"></i></button>
            </div>
            <button id="newQuote" onClick={()=>generateQuote()}>
                New Quote
            </button>
        </ButtonsBox>
      </QuoteContainer>
    </div>
  );
};

const QuoteContainer = styled.div`
  max-width: 600px;
  min-height: 300px;
  background-color: white;
  border-radius: 5px;
  padding: 25px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;

  #author {
    font-size: 20px;
    right: 25px;
    color: ${(props)=>props.color};
    margin-top : 15px;
  }
  p::before {
   content: ' ~';
   margin-right: 5px;
   font-size: 20px;
  }
`;

const Quote = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  /* font-size: 16px; */
  font-size: ${(props) => (props.quoteLength > 150 ? "14px" : "16px")};
  
  color: ${(props) => props.color};
  line-height: 40px;

  h2 {
    font-weight: 400;
    line-height: ${(props) => (props.quoteLength > 150 ? "35px" : "40px")};
    font-size: ${(props) => (props.quoteLength > 150 ? "20px" : "25px")};
  }

  i {
    font-size: 40px;
  }
`;

const ButtonsBox = styled.div`
    width: 100%;
    padding: 15px 0;
    /* background: #000; */
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .social-btns{
        display: flex;
        gap: 20px;
    }
    .social-btns button{
        background-color: ${props=>props.color};
        width: 50px;
        height: 50px;
        font-size: 20px;
        border-radius: 5px;
        outline: 0;
        border: 0;
        color: white;
        font-weight: 500;
        transition: 0.3s;
        &:hover{
            opacity: 0.8;
            cursor: pointer;
        }
    }
    #newQuote{
        background-color: ${props=>props.color};
        padding: 10px 15px;
        height: 50px;
        font-size: 16px;
        border-radius: 5px;
        outline: 0;
        border: 0;
        color: white;
        font-weight: 500;
        transition: 0.3s;

        &:hover{
            opacity: 0.8;
            cursor: pointer;
        }
    }

`
export default QuoteBox;
