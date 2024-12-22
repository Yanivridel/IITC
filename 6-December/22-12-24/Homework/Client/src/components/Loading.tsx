import { cn } from "@/lib/utils"; // Ensure you have the `cn` utility function from `shadcn`

export default function Loading({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "m-auto  inline-block h-12 w-12 animate-spin rounded-full border-2 border-solid border-y-purple-800",
        className
      )}
      role="status"
    />
  );
}
