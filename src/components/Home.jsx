import { useState } from "react";
import { useEffect } from "react";
import { instance } from "../utils/axios";
import { List, EmptyList } from "./List";

export const Home = () => {
  const [pokemon, setPokemon] = useState([]);
  const [pagination, setPagination] = useState({
    count: 0,
    page: 1,
    limit: 10,
  });

  useEffect(() => {
    const controller = new AbortController();
    const getData = async () => {
      const offset = (pagination?.page - 1) * pagination?.limit;
      const { data } = await instance.get(
        `pokemon?limit=${pagination?.limit}&offset=${offset}`,
        {
          signal: controller.signal,
        }
      );
      setPokemon(data?.results);
      setPagination((pagination) => {
        return { ...pagination, count: data?.count };
      });
    };
    getData();
    return () => controller.abort();
  }, [pagination?.page, pagination?.limit]);

  return (
    <>
      <div>
        <label htmlFor="">Limit: </label>

        <input
          type="text"
          onChange={(e) => {
            setPagination((pagination) => {
              return {
                ...pagination,
                limit: Number(e.target.value),
              };
            });
          }}
        />
        <hr />
      </div>
      {pokemon.length > 0 ? <List data={pokemon} /> : <EmptyList />}
    </>
  );
};
