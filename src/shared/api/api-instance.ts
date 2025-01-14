import axios, { AxiosError, AxiosRequestConfig } from 'axios';

export const apiInstance = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const createInstance = <T>(
    config: AxiosRequestConfig,
    options?: AxiosRequestConfig,
): Promise<T> => {
    return apiInstance({
        ...config,
        ...options,
    }).then((r) => r.data);
};

export type BodyData<Data> = Data;

export type ErrorType<Error> = AxiosError<Error>;
