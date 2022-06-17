import "./ExpenseItem.css";
const ExpenseItem = () => {
  return (
    <div className="expense-item">
      <div className="date">June 18th 2022</div>
      <div className="expense-item__description">
        <h2>Car insurance</h2>

        <div className="expense-item__price">99.99$</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
