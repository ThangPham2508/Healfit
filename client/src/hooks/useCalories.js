import { useCallback, useEffect, useState } from "react";

function useCalories() {
  const [info, setInfo] = useState({});
  const [calories, setCalories] = useState(0);
  const [isPending, setIsPending] = useState(false);

  const submitCalories = (calories) => {
    setCalories(calories);
  }

  const submitInfo = useCallback(async (e) => {
    e.preventDefault();

    
  }, []);

  return {
    submitCalories,
  }

}

export default useCalories;