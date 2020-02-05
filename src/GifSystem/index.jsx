import React, {useState} from "react";
import "./styles.css";
import Images from "./../Images";

function GifSystem() {
  const [search, setSearch] = useState("");

  return (
    <div className="gif-system">
      <div className="search-input-container">
        <input
          className="search-input"
          placeholder="Enter query..."
          onChange={e => {
            const value = e.target.value;
            setSearch(value);
          }}
        />
      </div>
      <Images {...{ search }} />
    </div>
  );
}
export default GifSystem;
