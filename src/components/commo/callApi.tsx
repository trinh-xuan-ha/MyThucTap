"use client"
import { useEffect } from 'react';
import { useCustomReducer } from '@/components/commo/apiReducer';

// Define the shape of the state used by the reducer
interface FetchState {
  data: any[];
  isLoading: boolean;
  error: Error | null;
}

// Define possible action types as a union of constant types
type FetchAction =
  | { type: 'fetchAPI/request'; isLoading: boolean }
  | { type: 'fetchAPI/success'; isLoading: boolean; error: null; data: any[] }
  | { type: 'fetchAPI/error'; isLoading: boolean; error: Error; data: any[] };

// The reducer function now has type annotations
function fetchReducer(state: FetchState, action: FetchAction): FetchState {
  switch (action.type) {
    case 'fetchAPI/request':
      return { ...state, isLoading: action.isLoading };
    case 'fetchAPI/success':
    case 'fetchAPI/error':
      return {
        ...state,
        isLoading: action.isLoading,
        error: action.error,
        data: action.data,
      };
    default:
      return state;
  }
}

// Define the custom hook with TypeScript
export function useCustomFetch(url: string) {
  const [state, dispatch] = useCustomReducer<FetchState, FetchAction>(fetchReducer, {
    data: [],
    isLoading: false,
    error: null,
  });

  useEffect(() => {
    (async () => {
      dispatch({
        type: 'fetchAPI/request',
        isLoading: true,
      });
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
        dispatch({
          type: 'fetchAPI/success',
          isLoading: false,
          error: null,
          data: json.data || [],
        });
      } catch (error) {
        dispatch({
          type: 'fetchAPI/error',
          isLoading: false,
          error: error instanceof Error ? error : new Error(String(error)),
          data: [],
        });
      }
    })();
  }, [url]);

  return { ...state };
}