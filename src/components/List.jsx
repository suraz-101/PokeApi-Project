export const List = ({ data }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th scope="col">NAME</th>

            <th scope="col">URL</th>
          </tr>
        </thead>
        <tbody>
          {console.log(data)}
          {data.length > 0 &&
            data.map((d) => {
              return (
                <tr key={d?.name}>
                  <td>{d?.name}</td>
                  <td>
                    <a href="#">{d?.url}</a>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export const EmptyList = () => {
  return <>No Data Found</>;
};
