interface Employee {
  id: string;
  name: string;
  position: string;
  admissionDate: string;
  phone: string;
  photo: string;
}

interface EmployeeRowProps {
  employee: Employee;
}

export function EmployeeRow({ employee }: EmployeeRowProps) {
  return (
    <tr className="border-b border-gray-100 hover:bg-gray-50 h-18">
      <td className="px-6">
        <img
          src={employee.photo}
          alt="Foto do funcionário"
          className="w-10 h-10 rounded-full object-cover"
        />
      </td>
      <td className="text-gray-900 px-6">{employee.name}</td>
      <td className="text-gray-600 px-6">{employee.position}</td>
      <td className="text-gray-600 px-6">{employee.admissionDate}</td>
      <td className="text-gray-600 px-6">{employee.phone}</td>
    </tr>
  );
}