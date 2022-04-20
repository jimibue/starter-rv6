const BraintreeSubmitButton = ({ onClick, isDisabled, text }) => {
//   if (isDisabled) {
//     return <p>disabled right now</p>;
//   }
  return (
    <button
      disabled={isDisabled}
      onClick={onClick}
      style={{ background: "steelblue", color:'white', borderRadius: "5px" }}
    >
      {text}
    </button>
  );
};

export default BraintreeSubmitButton;
