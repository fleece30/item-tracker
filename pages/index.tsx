import AddItem from "../components/AddItem";
import ItemsTable from "../components/ItemsTable";
import React from "react";
interface HomeProps {
  // data: any;
}
const Home: React.FC<HomeProps> = ({}) => {
  return (
    <div className="flex flex-col space-y-20 px-20 py-10">
      <AddItem />
      <ItemsTable />
    </div>
  );
};

export default Home;
