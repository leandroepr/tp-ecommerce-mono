import Flex from "../../components/flex";
import Placeholder from "../../components/placeholder";

export function Category() {
  return (
    <Flex className="flex-col w-[67.5%] self-center">
      <Placeholder height="50" width="800" text="Buscas Relacionadas" />
      <Flex className="py-2 justify-between">
        <aside>
          <Placeholder height="600" width="300" text="Menu Lateral" />
        </aside>
        <Flex className="">
          <Placeholder height="1200" width="900" text="Grid Produtos" />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Category;
