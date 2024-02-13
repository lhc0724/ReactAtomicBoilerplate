import { useCallback, useState } from 'react';

const useBoolean = initial => {
  const [value, setValue] = useState(initial);

  const handleToggle = useCallback(() => {
    setValue(v => !v);
  }, []);

  const handleSetTrue = useCallback(() => {
    setValue(true);
  }, []);

  const handleSetFalse = useCallback(() => {
    setValue(false);
  }, []);

  return {
    value,
    setValue,
    toggle: handleToggle,
    setTrue: handleSetTrue,
    setFalse: handleSetFalse,
  };
};

export default useBoolean;
