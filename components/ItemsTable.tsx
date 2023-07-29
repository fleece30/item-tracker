import React from "react";
import gql from "graphql-tag";
import { useMutation, useQuery } from "@apollo/client";

interface ItemsTableProps {
  data?: any;
}

type Item = {
  id: string;
  name: string;
  broughtBy: string;
  cost: number;
};

const DeleteMutation = gql`
  mutation deleteItem($id: String!) {
    deleteItem(id: $id) {
      id
    }
  }
`;

const ItemsQuery = gql`
  query itemsQuery {
    items {
      id
      name
      broughtBy
      cost
    }
  }
`;
const ItemsTable: React.FC<ItemsTableProps> = ({}) => {
  const [deleteMutation] = useMutation(DeleteMutation);
  const { loading, error, data, refetch } = useQuery(ItemsQuery);

  const handleDelete = async (id: string) => {
    await deleteMutation({
      variables: {
        id,
      },
    })
      .then(() => {
        alert("Item deleted");
        refetch(ItemsQuery);
      })
      .catch(() => alert("There was some error!"));
  };

  if (loading) return null;

  if (error) return `Error! ${error}`;

  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th>Item name</th>
          <th>Cost</th>
          <th>Brought by</th>
          <th>Delete item</th>
        </tr>
      </thead>
      <tbody className="text-center">
        {data.items.map((item: Item, index: number) => {
          return (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.cost}</td>
              <td>{item.broughtBy}</td>
              <td
                className="cursor-pointer text-4xl"
                onClick={() => handleDelete(item.id)}
              >
                &#9249;
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ItemsTable;
