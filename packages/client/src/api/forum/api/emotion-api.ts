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
import { AddEmotionDto } from '../models';
// @ts-ignore
import { EmotionType } from '../models';
/**
 * EmotionApi - axios parameter creator
 * @export
 */
export const EmotionApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Add emotion
         * @param {AddEmotionDto} [addEmotionDto] Add emotion
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addEmotion: async (addEmotionDto?: AddEmotionDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/emotion`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(addEmotionDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Delete emotion
         * @param {number} id Emotion ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteEmotion: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteEmotion', 'id', id)
            const localVarPath = `/emotion/{id}`
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
    }
};

/**
 * EmotionApi - functional programming interface
 * @export
 */
export const EmotionApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = EmotionApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Add emotion
         * @param {AddEmotionDto} [addEmotionDto] Add emotion
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addEmotion(addEmotionDto?: AddEmotionDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmotionType>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addEmotion(addEmotionDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Delete emotion
         * @param {number} id Emotion ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteEmotion(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmotionType>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteEmotion(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * EmotionApi - factory interface
 * @export
 */
export const EmotionApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = EmotionApiFp(configuration)
    return {
        /**
         * 
         * @summary Add emotion
         * @param {AddEmotionDto} [addEmotionDto] Add emotion
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addEmotion(addEmotionDto?: AddEmotionDto, options?: any): AxiosPromise<EmotionType> {
            return localVarFp.addEmotion(addEmotionDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete emotion
         * @param {number} id Emotion ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteEmotion(id: number, options?: any): AxiosPromise<EmotionType> {
            return localVarFp.deleteEmotion(id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * EmotionApi - interface
 * @export
 * @interface EmotionApi
 */
export interface EmotionApiInterface {
    /**
     * 
     * @summary Add emotion
     * @param {AddEmotionDto} [addEmotionDto] Add emotion
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmotionApiInterface
     */
    addEmotion(addEmotionDto?: AddEmotionDto, options?: AxiosRequestConfig): AxiosPromise<EmotionType>;

    /**
     * 
     * @summary Delete emotion
     * @param {number} id Emotion ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmotionApiInterface
     */
    deleteEmotion(id: number, options?: AxiosRequestConfig): AxiosPromise<EmotionType>;

}

/**
 * EmotionApi - object-oriented interface
 * @export
 * @class EmotionApi
 * @extends {BaseAPI}
 */
export class EmotionApi extends BaseAPI implements EmotionApiInterface {
    /**
     * 
     * @summary Add emotion
     * @param {AddEmotionDto} [addEmotionDto] Add emotion
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmotionApi
     */
    public addEmotion(addEmotionDto?: AddEmotionDto, options?: AxiosRequestConfig) {
        return EmotionApiFp(this.configuration).addEmotion(addEmotionDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Delete emotion
     * @param {number} id Emotion ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmotionApi
     */
    public deleteEmotion(id: number, options?: AxiosRequestConfig) {
        return EmotionApiFp(this.configuration).deleteEmotion(id, options).then((request) => request(this.axios, this.basePath));
    }
}
