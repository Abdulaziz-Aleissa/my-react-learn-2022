import Expenses from "./components/Expenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 10,
      date: new Date(2022, 5, 13),
    },
    { id: "e2", title: "New TV", amount: 400, date: new Date(2022, 3, 8) },
    {
      id: "e3",
      title: "Car Insurace",
      amount: 99.99,
      date: new Date(2022, 6, 18),
    },
    {
      id: "e4",
      title: "New Wooden Desk",
      amount: 199,
      date: new Date(2022, 6, 20),
    },
  ];

  return (
    <div>
      <h2>Let's get started!!!! </h2>
      <Expenses items={expenses}></Expenses>
    </div>
  );
};

export default App;
