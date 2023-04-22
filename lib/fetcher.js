import useSWR from "swr";

const baseFetcher = (...args) => fetch(...args).then((res) => res.json());

const baseURL =
  process.env.NEXT_PUBLIC_APP_DEV || process.env.NEXT_PUBLIC_APP_PRO;

export default function fetcher(endPoint) {
  const { data, error } = useSWR(`${baseURL}${endPoint}`, baseFetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}
