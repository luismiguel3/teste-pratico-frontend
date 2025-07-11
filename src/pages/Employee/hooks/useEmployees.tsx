import { useState, useEffect } from 'react';
import type { Employee, UseEmployeesReturn } from '../../../types/employee';


export function useEmployees(): UseEmployeesReturn {
  const [data, setData] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEmployees = async () => {
    try {
      setLoading(true);
      
      const response = await fetch("http://localhost:3000/employees");
      
      if (!response.ok) {
        throw new Error(`Erro ${response.status}: ${response.statusText}`);
      }
      
      const employees = await response.json();
      setData(employees);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Erro desconhecido";
      setError(errorMessage);
      console.error("Erro ao buscar funcionários:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return {
    data,
    loading,
    error,
    refetch: fetchEmployees
  };
}