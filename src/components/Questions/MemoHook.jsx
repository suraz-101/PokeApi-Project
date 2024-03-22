import { useMemo } from "react";
import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";

export const MemoHook = () => {
  const [toggle, setToggle] = useState(false);
  const { data } = useFetch("https://dummyjson.com/products");

  const findHighestRatingProduct = (data) => {
    const product = data?.products?.sort((a, b) => a.rating - b.rating).pop();

    return product?.title.concat("(", product?.rating, ")");
  };

  const result = useMemo(() => findHighestRatingProduct(data), [data]);
  return (
    <>
      <h4>{result}</h4>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toogle Me
      </button>

      <br />
      {toggle && <h4>Toggle</h4>}
    </>
  );
};
