import Sumary from "../../components/Sumary"
import Tabs from "../../components/Tabs";
import TableOrder from "../TableOrder";

const Home = (): JSX.Element => { 
  return (
    <div className="p-15">
      <Sumary />
      <Tabs />
      <TableOrder />
    </div>
  )
}

export default Home;