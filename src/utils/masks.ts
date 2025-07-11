export function phoneMask(value: string): string {
  if (!value) return '';
  
  const numbers = value.replace(/\D/g, '');
  
  if (numbers.length <= 2) {
    return `+${numbers}`;
  } else if (numbers.length <= 4) {
    return `+${numbers.slice(0, 2)} (${numbers.slice(2)}`;
  } else if (numbers.length <= 9) {
    return `+${numbers.slice(0, 2)} (${numbers.slice(2, 4)}) ${numbers.slice(4)}`;
  } else {
    return `+${numbers.slice(0, 2)} (${numbers.slice(2, 4)}) ${numbers.slice(4, 9)}-${numbers.slice(9, 12)}`;
  }
}

export function removePhoneMask(value: string): string {
  return value.replace(/\D/g, '');
}

