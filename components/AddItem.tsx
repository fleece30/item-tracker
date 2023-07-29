import React, { useState } from "react";
import TextInput from "../components/TextInput";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import apollo from "../lib/apollo";

interface AddItemProps {}

const createItemMutation = gql`
  mutation createItemMutation(
    $name: String!
    $broughtBy: String!
    $cost: Int!
  ) {
    createItem(name: $name, broughtBy: $broughtBy, cost: $cost) {
      id
    }
  }
`;

const AddItem: React.FC<AddItemProps> = ({}) => {
  const [itemName, setItemName] = useState("");
  const [cost, setCost] = useState(0);
  const [broughtBy, setBroughtBy] = useState("Abhishek");
  const [createItem] = useMutation(createItemMutation);

  const handleSubmit = async () => {
    await createItem({
      variables: {
        name: itemName,
        broughtBy: broughtBy,
        cost: cost,
      },
    })
      .then(async () => {
        alert("Item added successfully!");
        await apollo.refetchQueries({ include: "active" });
      })
      .catch(() => console.log(itemName, cost, broughtBy));
  };

  return (
    <div className="flex flex-col space-y-10">
      <h1 className="text-4xl">Add new item</h1>
      <div className="flex space-x-7">
        <TextInput
          placeholder={"Item Name"}
          onChange={(e) => {
            setItemName(e.target.value);
          }}
          type={"text"}
        />
        <TextInput
          placeholder={"Cost"}
          onChange={(e) => {
            setCost(parseInt(e.target.value));
          }}
          type={"number"}
        />

        {/*Brought by*/}

        <div className="flex flex-col space-y-2">
          <p>Brought by:</p>
          <select
            defaultValue={"Abhishek"}
            onChange={(e) => setBroughtBy(e.target.value)}
            className="px-7 py-4 rounded-2xl"
          >
            <option value="Abhishek">Abhishek</option>
            <option value="Pratham">Pratham</option>
            <option value="Saurabh">Saurabh</option>
            <option value="Girish">Girish</option>
            <option value="Saumya">Saumya</option>
            <option value="Akanksha">Akanksha</option>
          </select>
        </div>
      </div>
      <button
        onClick={handleSubmit}
        className="rounded-full px-4 py-1 h-[60px] w-1/6 translate-y-1/2"
      >
        Add item
      </button>
    </div>
  );
};

export default AddItem;
