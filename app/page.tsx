import Tabs from "@/components/Navigation/Tabs/Tabs";
import Table from "@/components/Table/Table";
import TableHead from "@/components/Navigation/TableHead.tsx/TableHead";


export default function Home() {

  return (
    <div className="p-10 flex flex-col">
      <Tabs/>
      <TableHead/>
      <Table/>
    </div>
  );
}
