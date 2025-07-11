import { EmployeeCard } from "./EmployeeCard";
import { EmployeeRow } from "./EmployeeRow";
import type { Employee } from "../../../types/employee";

interface EmployeeTableProps {
  employees: Employee[];
}

export function EmployeeTable({ employees }: EmployeeTableProps) {
  return (
    <>
      {/* Desktop */}
      <div className="hidden md:block w-full bg-white shadow-sm border border-gray-200 rounded-t-lg overflow-hidden">
        <table className="w-full">
          <thead className="h-14">
            <tr className="bg-blue-primary">
              <th className="text-left py-4 px-6 font-semibold text-white rounded-tl-lg">
                FOTO
              </th>
              <th className="text-left py-4 px-6 font-semibold text-white">
                NOME
              </th>
              <th className="text-left py-4 px-6 font-semibold text-white">
                CARGO
              </th>
              <th className="text-left py-4 px-6 font-semibold text-white">
                DATA DE ADMISSÃO
              </th>
              <th className="text-left py-4 px-6 font-semibold text-white rounded-tr-lg">
                TELEFONE
              </th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <EmployeeRow key={employee.id} employee={employee} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile */}
      <div className="md:hidden w-full">
        <div className="bg-blue-primary text-white font-semibold px-3.5 py-3 rounded-t-xl flex space-x-6 ">
          <h2 className="font-normal">FOTO</h2>
          <h2 className="font-normal">NOME</h2>
          <span className="ml-auto">
            <span className="inline-block w-2 h-2 bg-white rounded-full mr-2"></span>
          </span>
        </div>

        {employees.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </div>
    </>
  );
}
