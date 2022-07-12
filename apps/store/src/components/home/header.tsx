import React from "react";
import Placeholder from "../placeholder";
import SearchInput from "../search-input/search-input";

export default function Header () {
  const [search, setSearch] = React.useState('');
  React.useEffect(() => {
    console.log('search', search);
  }, [search]);
  return (
    <div className="bg-yellow-300 w-full h-32 flex justify-center items-center">
      <Placeholder width="1280" height="120" text="Header" />
      <SearchInput
        className="max-w-sm"
        value={search}
        onChange={setSearch}
        onSearch={(value) => console.log('Pesquisar por:', value)}
        placeholder="Pesquisar por produto..."
      />
    </div>
  );
}