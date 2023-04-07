import useSWR from "swr";

// const baseURL =

const baseFetcher = (...args) => fetch(...args).then((res) => res.json());

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export default function fetcher(endPoint) {
  const { data, error } = useSWR(`${baseURL}${endPoint}`, baseFetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}
