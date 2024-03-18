import { useFetch } from "../hooks/useFetch";

export const DisplayProductsData = ({ id }) => {
  const { data, loading, error } = useFetch(
    `https://dummyjson.com/products/${id}`
  );
  console.log("title is ", data);
  if (error) {
    return <>{error}</>;
  }

  return (
    <>
      {loading ? (
        <>loading...</>
      ) : (
        <>
          <hr />
          <p> Porduct name is : </p>
          {data?.title}
        </>
      )}
    </>
  );
};

export const DisplayUsersData = ({ id }) => {
  const { data, loading, error } = useFetch(
    `https://dummyjson.com/users/${id}`
  );

  if (error) {
    return <>{error}</>;
  }

  return (
    <>
      {loading ? (
        <>loading...</>
      ) : (
        <>
          <hr />
          <p>users name : </p>
          {data?.firstName + " " + data?.lastName}
        </>
      )}
    </>
  );
};
