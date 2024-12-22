import { getAllPosts } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

export function usePosts() {
    return useQuery({
        queryKey: ["posts"],
        queryFn: () => getAllPosts(),
        // retry: 1,
        // gcTime: 5000, // default to 5 minute
        // refetchOnWindowFocus: false, // default to 5 true
    });
}
