import React from 'react';
import SearchInput from '../components/search-input/search-input';

export function Index() {
  const [search, setSearch] = React.useState('');
  React.useEffect(() => {
    console.log('search', search);
  }, [search]);
  return (
    <div className="flex flex-col flex-1 bg-slate-50">
      <div className="h-10 drop-shadow-sm bg-slate-100 flex">
        <div className="container mx-auto ">
          <h1 className="text-2xl">Welcome to the Store</h1>
        </div>
      </div>
      <div className="container mx-auto flex flex-col">
        SearchInput
        <SearchInput
          className="max-w-sm"
          value={search}
          onChange={setSearch}
          onSearch={(value) => console.log('Pesquisar por:', value)}
          placeholder="Pesquisar por produto..."
        />
      </div>
    </div>
  );
}

export default Index;
