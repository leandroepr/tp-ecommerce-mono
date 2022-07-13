import React from "react";
import Placeholder from "../placeholder";


export default function Header () {
  const [search, setSearch] = React.useState('');
  React.useEffect(() => {
    console.log('search', search);
  }, [search]);
  return (
    <div className="bg-yellow-300 w-full h-32 flex justify-center items-center">
      <Placeholder width="1280" height="120" text="Header" />

    </div>
  );
}