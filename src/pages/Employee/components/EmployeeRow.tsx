import { phoneMask } from "../../../utils/masks";
import type { Employee } from "../../../types/employee";

interface EmployeeRowProps {
  employee: Employee;
}

export function EmployeeRow({ employee }: EmployeeRowProps) {
  return (
    <tr className="border-b border-gray-100 hover:bg-gray-50 h-18">
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
  );
}