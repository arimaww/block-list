import { authControllerGetSessionInfo } from '@/shared/api/generated';
import { QueryClient, useQuery } from '@tanstack/react-query';

const sessionKey = ['session'];

export function useSessionQuery() {
    return useQuery({
        queryKey: sessionKey,
        queryFn: authControllerGetSessionInfo,
        retry: 0,
        staleTime: (5 * 60) * 1000,
    });
}

export function useResetSession() {
    const queryClient = new QueryClient();

    return () => queryClient.removeQueries();
}
