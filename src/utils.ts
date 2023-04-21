export function enumToArray<T extends Record<string, string | number>>(
  e: T
): [keyof T, T[keyof T]][] {
  return Object.entries(e)
    .filter(([key]) => typeof e[key as keyof T] === "number" || "string")
    .map(([key]) => [key as keyof T, e[key as keyof T]]);
}
