import { useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { useFetch } from "../../hooks/useFetch";

export const Search = () => {
  const [search, setSearch] = useState("");
  const [debounceTerm, setDebounceTerm] = useState("");
  //   const [data, setData] = useState(null);
  const { data } = useFetch(`https://dummyjson.com/posts/search?q=${search}`);
  useDebounce({ wait: 1000, value: debounceTerm, setFn: setSearch });

  //   console.log(data?.posts);
  return (
    <>
      <input
        type="text"
        placeholder="search "
        onChange={(e) => {
          setDebounceTerm(e.target.value);
        }}
      />
      <div>
        <ol>
          {data?.posts?.length > 0 ? (
            data?.posts?.map((post) => {
              return <li key={post.id}>{post.title}</li>;
            })
          ) : (
            <>No data found</>
          )}
        </ol>
      </div>
    </>
  );
};
