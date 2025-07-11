import { useState } from "react";
import { phoneMask } from "../../../utils/masks";

interface Employee {
  id: string;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
  image: string;
}

interface EmployeeCardProps {
  employee: Employee;
}

export function EmployeeCard({ employee }: EmployeeCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white border border-gray-200  overflow-hidden text-display">
      <div
        className="flex items-center justify-between p-3"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center space-x-6">
          <img
            src={employee.image}
            alt="Foto do funcionário"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-medium">{employee.name}</span>
        </div>

        <svg
          className={`w-6 h-6 text-blue-primary transition-transform duration-200 ${
            isExpanded ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? "max-h-96 pb-7" : "max-h-0"
        }`}
      >
        <div className="px-3 pb-4">
          <div className="space-y-2 pt-3">
            <div className="flex justify-between border-gray-10 border-b-1 border-dashed">
              <span className="text-sm font-medium">Cargo</span>
              <span className="text-sm text-gray-900">{employee.job}</span>
            </div>
            <div className="flex justify-between border-gray-10 border-b-1 border-dashed">
              <span className="text-sm font-medium">Data de admissão</span>
              <span className="text-sm text-gray-900">
                {new Date(employee.admission_date).toLocaleDateString("pt-BR")}
              </span>
            </div>
            <div className="flex justify-between border-gray-10 border-b-1 border-dashed">
              <span className="text-sm font-medium">Telefone</span>
              <span className="text-sm text-gray-900">{phoneMask(employee.phone)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
