import { useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames'

import { Button } from 'shared/ui/Button/Button';

// для тестирования ErrorBoundary
export const BagButton = () => {
  const [error, setError] = useState(false)

  const throwHandler = () => setError(true)

  useEffect(() => {
    if (error) {
      throw new Error()
    }
  }, [error])

  return (
    <Button
      onClick={throwHandler}
    >
      throw error
    </Button>
  );
};
