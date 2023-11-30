import { useEffect, useState } from 'react';

import { ALPHABET_WORDS } from './alphabet';
import Form from './Form';
import GeneratePass from './GeneratePass';
import GeneratePassAndCopyBtn from './GeneratePassAndCopyBtn';
import PasswordTable from './PasswordTable';
import SavePassword from './SavePassword';
import styles from './Password.module.css';

export default function App() {
  const [generatedPassword, setGeneratedPassword] = useState('');
  const [rememberPassword, setRememberPassword] = useState('There is no password to remember! Please generate one');
  const [isChecked, setIsChecked] = useState({
    isCheckedLowerCha: true,
    isCheckedUpperCha: true,
    isCheckedNumber: true,
    isCheckedSymbols: false,
  });
  const [passwordLength, setPasswordLength] = useState(6);
  const [saveNameAndPass, setSaveNameAndPass] = useState([]);
  const [notificationMessage, setNotificationMessage] = useState('');

  useEffect(() => {
    const storedData = getLocalStorage('PASS');
    if (storedData) {
      setSaveNameAndPass(storedData);
    }
  }, []);

  const setLocalStorage = (name, value) => {
    localStorage.setItem(name, JSON.stringify(value));
  };

  // retrieve name and password key value pare array from localStorage
  const getLocalStorage = (name) => {
    const storedData = localStorage.getItem(name);
    if (storedData !== null) {
      return JSON.parse(storedData);
    }
  };

  const checkPasswordNameExit = (checkName, newName) => {
    return checkName.filter((item) => item.name === newName);
  };

  const handleSavePasswordAndName =
    (name, pass, checkName, callableSetLocalStorage, callableCheckPasswordNameExit, callableShowTextNotification) =>
    () => {
      const isNameExit = callableCheckPasswordNameExit(checkName, name);

      if (name.length !== 0) {
        if (isNameExit.length > 0) {
          callableShowTextNotification('name already taken!');
          return;
        }

        // Update the state and access it immediately
        setSaveNameAndPass((prevState) => {
          const updatedState = [...prevState, { name, pass }];
          console.log(updatedState); // Access the updated state
          callableSetLocalStorage('PASS', updatedState);
          return updatedState;
        });
      } else {
        callableShowTextNotification('cannot save without name!');
        return;
      }
    };

  const handleChange = (checkboxName) => (e) => {
    setIsChecked((prevState) => ({
      ...prevState,
      [checkboxName]: e.target.checked,
    }));
  };

  // object that deal with random generation
  const randomPassword = {
    // generate random a-z
    lower: () => {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    },

    // generate random A-Z
    upper: () => {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    },

    // generate random 0-9
    number: () => {
      return Math.floor(Math.random() * 10);
    },

    // generate random symbols
    symbolCha: () => {
      const symbolCha = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '/', '|'];
      const randomIndex = Math.floor(Math.random() * symbolCha.length);
      return symbolCha[randomIndex];
    },
  };

  const shuffleString = (password) => {
    const arrayPass = password.split(''); // change string into array
    for (let i = arrayPass.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i + 1); // random number base on array length
      [arrayPass[i], arrayPass[j]] = [arrayPass[j], arrayPass[i]]; // shuffle by using array destructuring
    }

    return arrayPass.join(''); // change array back into string
  };

  const PasswordToRemember = (password, alphabet) => {
    const passArr = password.split('');
    let formatPass = '';
    passArr.map((cha) => {
      if (alphabet[cha]) {
        formatPass += ` ${alphabet[cha]}`;
      } else {
        formatPass += ` ${cha}`;
      }
    });

    setRememberPassword(formatPass.trim());
  };

  const passwordGenerate = (isCheckedType, length, random, callablePasswordToRemember, alphabet) => () => {
    let passwordGenerate = '';
    const {
      isCheckedLowerCha: lower,
      isCheckedUpperCha: upper,
      isCheckedNumber: number,
      isCheckedSymbols: symbolCha,
    } = isCheckedType;
    const charTypeCount = lower + upper + number + symbolCha;
    const charTypeArray = [{ lower }, { upper }, { number }, { symbolCha }].filter(
      (type) => Object.values(type)[0] === true
    );

    if (charTypeCount === 0) {
      return '';
    }

    // loop through the array of type
    for (let i = 0; i < length; i += charTypeCount) {
      charTypeArray.forEach((type) => {
        const typeName = Object.keys(type)[0];
        passwordGenerate += random[typeName]();
      });
    }
    passwordGenerate = shuffleString(passwordGenerate).slice(0, length);
    setGeneratedPassword(passwordGenerate);
    callablePasswordToRemember(passwordGenerate, alphabet);
  };

  // copy result value when click to copy btn using navigator clipboard api
  const handleCopyText = (e) => {
    // return if password is null
    e.preventDefault();
    if (generatedPassword === '') return;
    navigator.clipboard.writeText(generatedPassword);
  };

  const showTextNotification = (message) => {
    setNotificationMessage(message);

    setTimeout(() => {
      setNotificationMessage('');
    }, 1000);
  };

  return (
    <div className={styles['App']}>
      <div className={styles['main_section']}>
        <Form
          handleChange={handleChange}
          isChecked={isChecked}
          passwordLength={passwordLength}
          setPasswordLength={setPasswordLength}
        />

        <GeneratePass
          generatedPassword={generatedPassword}
          handleCopyText={handleCopyText}
          notificationMessage={notificationMessage}
          showTextNotification={showTextNotification}
        />

        <div className={styles['third_section']}>
          <label>Password remember shortcut: </label>
          <p>{rememberPassword}</p>
        </div>

        <GeneratePassAndCopyBtn
          ALPHABET_WORDS={ALPHABET_WORDS}
          PasswordToRemember={PasswordToRemember}
          handleCopyText={handleCopyText}
          isChecked={isChecked}
          notificationMessage={notificationMessage}
          passwordGenerate={passwordGenerate}
          passwordLength={passwordLength}
          randomPassword={randomPassword}
          showTextNotification={showTextNotification}
        />

        <SavePassword
          checkPasswordNameExit={checkPasswordNameExit}
          generatedPassword={generatedPassword}
          handleSavePasswordAndName={handleSavePasswordAndName}
          notificationMessage={notificationMessage}
          saveNameAndPass={saveNameAndPass}
          setLocalStorage={setLocalStorage}
          showTextNotification={showTextNotification}
        />
      </div>

      <div className={styles['sixth_section']}>
        <h2 className={styles['second_header']}>All your saved password</h2>
        <PasswordTable saveNameAndPass={saveNameAndPass} />
      </div>
    </div>
  );
}
