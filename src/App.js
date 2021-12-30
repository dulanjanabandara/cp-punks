import Header from "./components/Header";
import CollectionCard from "./components/CollectionCard";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [punkListData, setPunkListData] = useState([]); // punkListData is going to store all the punks details right in there.

  // useEffect() is used for make an API call
  useEffect(() => {
    // accessing data
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0xf5C5b34ec9A5aCE3eB3F260049e5510f5204c99c&order_direction=asc"
      );
      console.log(openseaData.data.assets);

      // storing data
      setPunkListData(openseaData.data.assets);
    };
    return getMyNfts();
  }, []);

  return (
    <div className="app">
      <Header />
      <CollectionCard
        id={0}
        name={"Bandana Punk"}
        traits={[{ value: 7 }]}
        image="https://ipfs.thirdweb.com/ipfs/bafybeigqkficum3anns36jid3dxvc4yfauyuvqjulbg43n23qxn3ce3tyu"
      />
    </div>
  );
}

export default App;
