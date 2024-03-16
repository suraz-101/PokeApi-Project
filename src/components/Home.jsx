import { useState } from "react";
import { useEffect } from "react";
import { instance } from "../utils/axios";
import { List, EmptyList } from "./List";

export const Home = () => {
  const [pokemon, setPokemon] = useState([]);
  const [pagination, setPagination] = useState({
    count: 0,
    page: 1,
    limit: 20,
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
      setPagination((prevCount) => {
        return { ...prevCount, count: data?.count };
      });
    };
    getData();
    return () => controller.abort();
  }, [pagination?.page, pagination?.limit]);

  return (
    <>
      <div>
        <button>Increase Limit by 20</button>
      </div>
      {pokemon.length > 0 ? <List data={pokemon} /> : <EmptyList />}
    </>
  );
};
