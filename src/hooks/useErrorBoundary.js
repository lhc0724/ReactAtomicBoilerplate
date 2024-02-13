import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearError } from '../store/slices/error-slice';

const useErrorBoundary = () => {
  const errorState = useSelector(state => state.error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (errorState.error.message.length > 0) {
      dispatch(clearError());
      console.error(errorState.error);
    }
  }, [dispatch, errorState.error]);

  return errorState.error;
};

export default useErrorBoundary;
