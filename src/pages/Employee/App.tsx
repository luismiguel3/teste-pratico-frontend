import { useState } from "react";
import { EmployeeTable } from "./components/EmployeeTable";
import { SearchInput } from "../../components/SearchInput";
import { Layout } from "../../components/Layout";
import { useEmployees } from "./hooks/useEmployees";
import { useEmployeeFilter } from "./hooks/useEmployeeFilter";

function App() {
  const [filter, setFilter] = useState("");
  const { data: employees, loading, error, refetch } = useEmployees();
  const filteredEmployees = useEmployeeFilter(employees, filter);

  if (loading) {
    return (
      <Layout>
        <div className="flex justify-center items-center h-64">
          <div className="text-lg text-gray-600">
            Carregando funcionários...
          </div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center h-64 space-y-4">
          <div className="text-lg text-red-600">
            Erro ao carregar funcionários
          </div>
          <div className="text-sm text-gray-600">{error}</div>
          <button
            onClick={refetch}
            className="px-4 py-2 bg-blue-primary text-white rounded hover:bg-blue-600 transition-colors"
          >
            Tentar novamente
          </button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <h1 className="text-2xl font-semibold">Funcionários</h1>
        <SearchInput onSearch={setFilter} />
      </div>

      <EmployeeTable employees={filteredEmployees} />
    </Layout>
  );
}

export default App;
