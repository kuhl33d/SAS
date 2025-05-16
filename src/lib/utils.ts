import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Helper function to ensure image paths include the correct base path
 * This is needed because Vite is configured with base: "/SAS/" in production
 * but uses "/" in development
 */
export function getImagePath(path: string): string {
  if (!path) return "";
  
  // If path is an absolute URL, return it as is
  if (path.startsWith("http")) {
    return path;
  }
  
  // If we're in a development environment (localhost or GitHub Codespaces),
  // just ensure the path starts with a slash
  const isDevelopment = window.location.hostname.includes('localhost') || 
                        window.location.hostname.includes('github.dev') ||
                        window.location.hostname.includes('github.io');
  
  if (isDevelopment) {
    return path.startsWith('/') ? path : `/${path}`;
  }
  
  // Production environment: add the /SAS/ prefix
  // If the path already has the base URL, return it as is
  if (path.startsWith("/SAS/")) {
    return path;
  }
  
  // If the path starts with "/", add the base URL
  if (path.startsWith("/")) {
    return `/SAS${path}`;
  }
  
  // Otherwise, add the base URL with a leading slash
  return `/SAS/${path}`;
}
