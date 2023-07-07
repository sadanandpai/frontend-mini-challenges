import { ChangeEvent, useState } from 'react';

export const usePasswordStrength = (): [string, string, number, Record<string, boolean>, (event: ChangeEvent<HTMLInputElement>) => void] => {
  const [password, setPassword] = useState<string>('');
  const hasNumber = /\d/; // check if password contains at least one number
  const hasUpperCase = /[A-Z]/; // check if password contains at least one uppercase letter
  const hasLowerCase = /[a-z]/; // check if password contains at least one lowercase letter
  const hasSpecial = /[^A-Za-z0-9]/; // check if password contains at least one special character

  const getPasswordStrength = (score: number): string => {
    if (score > 8) {
      return 'Strong';
    }
    if (score > 5) {
      return 'Medium';
    }
    return 'Weak';
  };

  const getPasswordScore = (text: string): number => {
    let score = 0;
    if (text.length > 3) {
      score = Math.min(6, Math.floor(text.length / 3));
      score += +hasNumber.test(text) + +hasUpperCase.test(text) + +hasLowerCase.test(text) + +hasSpecial.test(text);
    }
    return score;
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const password = event.target.value;
    setPassword(password);
  };

  const passwordScore = getPasswordScore(password);
  const passwordStrength = getPasswordStrength(passwordScore);
  const passwordIndicators = {
    lc: hasLowerCase.test(password),
    uc: hasUpperCase.test(password),
    num: hasNumber.test(password),
    sym: hasSpecial.test(password),
  };

  return [password, passwordStrength, passwordScore, passwordIndicators, handlePasswordChange];
};