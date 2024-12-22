import { getPostById } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

export function usePost(id: string) {
    return useQuery({
        queryKey: ["post" , id],
        queryFn: () => getPostById(id),
        enabled: !!id,
        // retry: 1,
        // gcTime: 5000, // default to 5 minute
        // refetchOnWindowFocus: false, // default to 5 true
    });
}
