/* tslint:disable */
/* eslint-disable */
/**
 * Shades
 * Web middle chats API
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { CreateThreadDto } from '../models';
// @ts-ignore
import { ThreadType } from '../models';
/**
 * ThreadApi - axios parameter creator
 * @export
 */
export const ThreadApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Add Thread
         * @param {CreateThreadDto} [createThreadDto] Add Thread
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addThread: async (createThreadDto?: CreateThreadDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/thread`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Authorization required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createThreadDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Delete Thread
         * @param {number} id Thread ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteThread: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteThread', 'id', id)
            const localVarPath = `/thread/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Authorization required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get all Threads
         * @param {number} [offset] 
         * @param {number} [limit] 
         * @param {string} [title] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllThreads: async (offset?: number, limit?: number, title?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/thread`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Authorization required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (title !== undefined) {
                localVarQueryParameter['title'] = title;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get one Thread
         * @param {number} id Thread ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOneThread: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getOneThread', 'id', id)
            const localVarPath = `/thread/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Authorization required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update Thread
         * @param {number} id Thread ID
         * @param {CreateThreadDto} [createThreadDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateThread: async (id: number, createThreadDto?: CreateThreadDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateThread', 'id', id)
            const localVarPath = `/thread/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Authorization required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createThreadDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ThreadApi - functional programming interface
 * @export
 */
export const ThreadApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ThreadApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Add Thread
         * @param {CreateThreadDto} [createThreadDto] Add Thread
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addThread(createThreadDto?: CreateThreadDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ThreadType>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addThread(createThreadDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Delete Thread
         * @param {number} id Thread ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteThread(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ThreadType>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteThread(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get all Threads
         * @param {number} [offset] 
         * @param {number} [limit] 
         * @param {string} [title] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllThreads(offset?: number, limit?: number, title?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ThreadType>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllThreads(offset, limit, title, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get one Thread
         * @param {number} id Thread ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOneThread(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ThreadType>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOneThread(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Update Thread
         * @param {number} id Thread ID
         * @param {CreateThreadDto} [createThreadDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateThread(id: number, createThreadDto?: CreateThreadDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ThreadType>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateThread(id, createThreadDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ThreadApi - factory interface
 * @export
 */
export const ThreadApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ThreadApiFp(configuration)
    return {
        /**
         * 
         * @summary Add Thread
         * @param {CreateThreadDto} [createThreadDto] Add Thread
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addThread(createThreadDto?: CreateThreadDto, options?: any): AxiosPromise<ThreadType> {
            return localVarFp.addThread(createThreadDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete Thread
         * @param {number} id Thread ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteThread(id: number, options?: any): AxiosPromise<ThreadType> {
            return localVarFp.deleteThread(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get all Threads
         * @param {number} [offset] 
         * @param {number} [limit] 
         * @param {string} [title] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllThreads(offset?: number, limit?: number, title?: string, options?: any): AxiosPromise<Array<ThreadType>> {
            return localVarFp.getAllThreads(offset, limit, title, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get one Thread
         * @param {number} id Thread ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOneThread(id: number, options?: any): AxiosPromise<ThreadType> {
            return localVarFp.getOneThread(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update Thread
         * @param {number} id Thread ID
         * @param {CreateThreadDto} [createThreadDto] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateThread(id: number, createThreadDto?: CreateThreadDto, options?: any): AxiosPromise<ThreadType> {
            return localVarFp.updateThread(id, createThreadDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ThreadApi - interface
 * @export
 * @interface ThreadApi
 */
export interface ThreadApiInterface {
    /**
     * 
     * @summary Add Thread
     * @param {CreateThreadDto} [createThreadDto] Add Thread
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThreadApiInterface
     */
    addThread(createThreadDto?: CreateThreadDto, options?: AxiosRequestConfig): AxiosPromise<ThreadType>;

    /**
     * 
     * @summary Delete Thread
     * @param {number} id Thread ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThreadApiInterface
     */
    deleteThread(id: number, options?: AxiosRequestConfig): AxiosPromise<ThreadType>;

    /**
     * 
     * @summary Get all Threads
     * @param {number} [offset] 
     * @param {number} [limit] 
     * @param {string} [title] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThreadApiInterface
     */
    getAllThreads(offset?: number, limit?: number, title?: string, options?: AxiosRequestConfig): AxiosPromise<Array<ThreadType>>;

    /**
     * 
     * @summary Get one Thread
     * @param {number} id Thread ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThreadApiInterface
     */
    getOneThread(id: number, options?: AxiosRequestConfig): AxiosPromise<ThreadType>;

    /**
     * 
     * @summary Update Thread
     * @param {number} id Thread ID
     * @param {CreateThreadDto} [createThreadDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThreadApiInterface
     */
    updateThread(id: number, createThreadDto?: CreateThreadDto, options?: AxiosRequestConfig): AxiosPromise<ThreadType>;

}

/**
 * ThreadApi - object-oriented interface
 * @export
 * @class ThreadApi
 * @extends {BaseAPI}
 */
export class ThreadApi extends BaseAPI implements ThreadApiInterface {
    /**
     * 
     * @summary Add Thread
     * @param {CreateThreadDto} [createThreadDto] Add Thread
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThreadApi
     */
    public addThread(createThreadDto?: CreateThreadDto, options?: AxiosRequestConfig) {
        return ThreadApiFp(this.configuration).addThread(createThreadDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Delete Thread
     * @param {number} id Thread ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThreadApi
     */
    public deleteThread(id: number, options?: AxiosRequestConfig) {
        return ThreadApiFp(this.configuration).deleteThread(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get all Threads
     * @param {number} [offset] 
     * @param {number} [limit] 
     * @param {string} [title] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThreadApi
     */
    public getAllThreads(offset?: number, limit?: number, title?: string, options?: AxiosRequestConfig) {
        return ThreadApiFp(this.configuration).getAllThreads(offset, limit, title, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get one Thread
     * @param {number} id Thread ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThreadApi
     */
    public getOneThread(id: number, options?: AxiosRequestConfig) {
        return ThreadApiFp(this.configuration).getOneThread(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update Thread
     * @param {number} id Thread ID
     * @param {CreateThreadDto} [createThreadDto] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ThreadApi
     */
    public updateThread(id: number, createThreadDto?: CreateThreadDto, options?: AxiosRequestConfig) {
        return ThreadApiFp(this.configuration).updateThread(id, createThreadDto, options).then((request) => request(this.axios, this.basePath));
    }
}
