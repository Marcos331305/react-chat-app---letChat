import { Loader2 } from "lucide-react";

export function LoadingSpinner({ className = "", size = 24 }) {
  return (
    <Loader2
      className={`animate-spin ${className}`}
      size={size}
      aria-label="Loading..."
    />
  );
}
