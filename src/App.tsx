import { useState, useMemo } from "react";
import { EmployeeTable } from "./components/EmployeeTable";
import { SearchInput } from "./components/SearchInput";


const mockEmployees = [
  {
    id: "1",
    name: "João Silva",
    position: "Desenvolvedor",
    admissionDate: "15/03/2023",
    phone: "(11) 99999-9999",
    photo: "https://picsum.photos/40/40"
  },
  {
    id: "2",
    name: "Maria Santos",
    position: "Designer",
    admissionDate: "10/01/2023",
    phone: "(11) 88888-8888",
    photo: "https://picsum.photos/40/40"
  }
];

function App() {
  const [filter, setFilter] = useState("");

  const filteredEmployees = useMemo(() => {
    if (!filter) return mockEmployees;
    
    return mockEmployees.filter(employee =>
      employee.name.toLowerCase().includes(filter.toLowerCase()) ||
      employee.position.toLowerCase().includes(filter.toLowerCase())
    );
  }, [filter]);

  return (
    <div className="flex flex-col justify-baseline min-h-screen bg-gray-00 font-display w-full">
      <header className="w-full bg-white p-20 z-10 shadow-figma-2">
        <h1 className="text-xl lg:ml-10">
          <strong className="font-extrabold">Be</strong>Talent
        </h1>
      </header>
      <main className="flex justify-between items-center flex-wrap w-full py-10 gap-6 md:px-18 min-[320px]:px-5">
        <h1 className="text-2xl font-semibold">Funcionários</h1>
        <SearchInput onSearch={setFilter} />
        <EmployeeTable employees={filteredEmployees} />
      </main>
    </div>
  );
}

export default App;