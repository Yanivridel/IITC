import { getAllPosts } from "@/services/api";
import { useInfiniteQuery } from "@tanstack/react-query";

export function usePosts(limit = 10, title = "") {
    return useInfiniteQuery({
        queryKey: ["posts", title],
        queryFn: ({ pageParam = 1 }) => getAllPosts(pageParam, limit, title),
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.length === limit ? allPages.length + 1 : undefined;
        },
        initialPageParam: 1, 
    });
}