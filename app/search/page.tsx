"use client";

import { useSearchParams } from "next/navigation";
import Spinner from "./Spinner";
import useSWR from "swr";
import Posts from "../Posts";

const fetchPosts = async (url: string) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
};

const SearchPage = () => {
  const search = useSearchParams();
  const searchQuery = search.get("q");

  const encodedSearchQuery = encodeURI(searchQuery || "");

  const { data, isLoading } = useSWR(
    `/api/search?q=${encodedSearchQuery}`,
    fetchPosts
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (!data?.posts) {
    return null;
  }

  return (
    <>
      <span className="text-xl">
        Showing results for:{" "}
        <span className="font-semibold">{searchQuery}</span>
      </span>
      <Posts posts={data.posts} />
    </>
  );
};

export default SearchPage;
