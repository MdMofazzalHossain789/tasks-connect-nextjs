"use client";

import useSWR from "swr";

const localStorageFetcher = (key) => {
  if (typeof window === "undefined") return null; // SSR guard
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : [];
};

export default function useLocalStorageSWR(key, initialValue = []) {
  const { data, error, mutate } = useSWR(key, localStorageFetcher, {
    fallbackData: initialValue,
  });

  const setValue = (value) => {
    try {
      const newValue = value instanceof Function ? value(data) : value;
      localStorage.setItem(key, JSON.stringify(newValue));
      mutate(newValue, false); // update SWR cache immediately, no re-fetch
    } catch (err) {
      console.error("Error writing localStorage", err);
    }
  };

  return {
    value: data,
    setValue,
    error,
    isLoading: !error && !data,
  };
}
