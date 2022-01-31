import React from 'react';

function useLocalStorage(todoElement, initialValue) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [listElement, setListElement] = React.useState(initialValue);

  // React Hooks - Inician en "use"
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageElement = localStorage.getItem(todoElement);
        let parsedElement;

        if (!localStorageElement) {
          localStorage.setItem(todoElement, JSON.stringify(initialValue));
          parsedElement = initialValue;
        } else {
          parsedElement = JSON.parse(localStorageElement);
        }

        setListElement(parsedElement);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 1000);
  });

  const saveListElement = (newListElement) => {
    try {
      const stringifiedListElement = JSON.stringify(newListElement);
      localStorage.setItem(todoElement, stringifiedListElement);
      setListElement(newListElement);
    } catch (error) {
      setError(error);
    }
  };

  return { listElement, saveListElement, loading, error };
}

export { useLocalStorage };
