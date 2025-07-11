import { useMemo } from 'react';
import { removePhoneMask } from '../../../utils/masks';
import type { Employee } from '../../../types/employee';

export function useEmployeeFilter(employees: Employee[], filter: string) {
  return useMemo(() => {
    if (!filter) return employees;
    
    const searchTerm = filter.toLowerCase();
    
    return employees.filter(employee =>
      employee.name.toLowerCase().includes(searchTerm) ||
      employee.job.toLowerCase().includes(searchTerm) || 
      removePhoneMask(employee.phone).includes(searchTerm)
    );
  }, [employees, filter]);
}