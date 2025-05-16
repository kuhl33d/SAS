import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Helper function to ensure image paths include the correct base path
 * This is needed because Vite is configured with base: "/SAS/"
 */
export function getImagePath(path: string): string {
  if (!path) return "";
  
  // If the path already has the base URL or is an absolute URL, return it as is
  if (path.startsWith("/SAS/") || path.startsWith("http")) {
    return path;
  }
  
  // If the path starts with "/", add the base URL
  if (path.startsWith("/")) {
    return `/SAS${path}`;
  }
  
  // Otherwise, add the base URL with a leading slash
  return `/SAS/${path}`;
}
