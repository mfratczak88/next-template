import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const randomIndex = <T>(a: T[]): number => Math.floor(Math.random() * a.length);
export const randomElement = <T>(a: T[]): T => a[randomIndex(a)];

const colors = ['indigo', 'purple', 'pink', 'sky', 'emerald', 'green', 'teal', 'fuchsia'];

export const gradient = () => {
  return `bg-gradient-to-r from-${randomElement(colors)}-500 to-${randomElement(colors)}-500`;
};
