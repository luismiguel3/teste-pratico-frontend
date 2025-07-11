interface Employee {
  id: string;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
  image: string;
}

interface UseEmployeesReturn {
  data: Employee[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}


export type { Employee, UseEmployeesReturn };