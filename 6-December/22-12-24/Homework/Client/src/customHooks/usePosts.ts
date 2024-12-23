import { getAllPosts } from "@/services/api";
import { useInfiniteQuery } from "@tanstack/react-query";

export function usePosts(limit = 10) {
    return useInfiniteQuery({
        queryKey: ["posts"],
        queryFn: ({ pageParam = 1 }) => getAllPosts(pageParam, limit),
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.length === limit ? allPages.length + 1 : undefined;
        },
        initialPageParam: 1, 
    });
}