import { useState } from "react";

export default function DestinationFilter() {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
      />
    </div>
  );
}
