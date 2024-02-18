import Stepper from "./Stepper";

import styles from "./App.module.css";

// Configure-Driven UI
const STEPPER_DATA = [
  {
    name: "Contact Details",
    Component: () => <div>Add contact details for further communications.</div>,
  },

  {
    name: "Shipping Address",
    Component: () => <div>Add shipping address for successfull delivery.</div>,
  },

  {
    name: "Payment",
    Component: () => <div>Complete Payment to complete the order.</div>,
  },

  {
    name: "Delivered",
    Component: () => <div>Ready to get delivered!</div>,
  },
];

const App = () => {
  return (
    <div>
      <h1 className={styles.heading}>Stepper Component</h1>
      <Stepper stepConfig={STEPPER_DATA} />
    </div>
  );
};

export default App;
