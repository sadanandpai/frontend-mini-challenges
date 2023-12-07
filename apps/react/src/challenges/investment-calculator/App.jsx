import ResultsTable from './src/components/ResultsTable/ResultsTable.jsx';
import UserInput from './src/components/UserInput/UserInput.jsx';
import styles from './src/index.module.css';
import { useState } from 'react';

function App() {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = [];
  if (userInput) {
    let currentSavings = +userInput['current-savings'];
    const yearlyContribution = +userInput['yearly-contribution'];
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div className={styles.main}>
      <UserInput onCalculate={calculateHandler} />
      {userInput && <ResultsTable data={yearlyData} inInvest={userInput['current-savings']} />}
    </div>
  );
}

export default App;
