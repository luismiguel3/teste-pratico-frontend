import { EmployeeRow } from './EmployeeRow';

interface Employee {
  id: string;
  name: string;
  position: string;
  admissionDate: string;
  phone: string;
  photo: string;
}

interface EmployeeTableProps {
  employees: Employee[];
}

export function EmployeeTable({ employees }: EmployeeTableProps) {
  return (
    <div className="w-full bg-white shadow-sm border border-gray-200 rounded-t-lg overflow-hidden">
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
  );
}