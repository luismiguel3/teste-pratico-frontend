import { EmployeeCard } from "./EmployeeCard";
import { phoneMask } from "../../../utils/masks";

interface Employee {
  id: string;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
  image: string;
}

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
              <tr
                key={employee.id}
                className="border-b border-gray-100 hover:bg-gray-50 h-18"
              >
                <td className="px-6">
                  <img
                    src={employee.image}
                    alt="Foto do funcionário"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </td>
                <td className="text-gray-900 px-6">{employee.name}</td>
                <td className="text-gray-600 px-6">{employee.job}</td>
                <td className="text-gray-600 px-6">{new Date(employee.admission_date).toLocaleDateString("pt-BR")}</td>
                <td className="text-gray-600 px-6">{phoneMask(employee.phone)}</td>
              </tr>
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
