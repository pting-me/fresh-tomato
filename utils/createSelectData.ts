export interface Item {
  label: string;
  value: string;
}

export function createSelectData(labels: Record<string, string>): Item[] {
  return Object.entries(labels).map(([k, v]) => ({ label: v, value: k }));
}
