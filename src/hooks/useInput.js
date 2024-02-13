import { useState } from 'react';

/**
 * usage)
 *
 * const user = useInput('');
 *
 * <input {...user} /> or <input value={user.value} onChange={user.onChange} />
 * @param {string} initialValue
 * @returns {object} value, onChange 전달
 */
const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = event => {
    setValue(event.target.value);
  };

  return {
    value,
    onChange: handleChange,
  };
};

export default useInput;
