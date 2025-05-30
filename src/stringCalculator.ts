// export function add(numbers: string): number {
//   return 0; // placeholder
// }

// export function add(numbers: string): number {
//   if (numbers === "") return 0;
//   return 0; // Placeholder for further logic
// }

export function add(numbers: string): number {
  if (numbers === "") return 0;

  const parsed = parseInt(numbers, 10);
  if (!isNaN(parsed)) return parsed;

  return 0;
}
