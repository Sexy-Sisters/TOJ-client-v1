interface IValidSpace {
  (length: number, targetValue: string, setError: () => void): boolean;
}

export const validSpace: IValidSpace = (length, targetValue, setError) => {
  for (let i = 0; i < length; i++) {
    if (targetValue[i] === " ") {
      setError();
      return true;
    }
  }
  return false;
};
