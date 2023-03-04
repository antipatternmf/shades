/**
 * Swagger
 * Web middle chats API
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
import type { Configuration } from '../configuration';
// Some imports not used depending on template conditions
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction,
} from '../common';
import {
  BASE_PATH,
  RequestArgs,
  BaseAPI,
} from '../base';
import {
  ChangePasswordRequest, FindUserRequest, UserUpdateRequest, UserResponse,
} from '../models';

/**
 * UsersApi - axios parameter creator
 * @export
 */
export const UsersApiAxiosParamCreator = function (
  configuration?: Configuration,
) {
  return {
    /**
     *
     * @summary Get user by id
     * @param {any} id Numeric user id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userIdGet: async (
      id: any,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('userIdGet', 'id', id);
      const localVarPath = '/user/{id}'.replace(
        `{${'id'}}`,
        encodeURIComponent(String(id)),
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'GET',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Change user password
     * @param {ChangePasswordRequest} changePasswordRequest Password request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userPasswordPut: async (
      changePasswordRequest: ChangePasswordRequest,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'changePasswordRequest' is not null or undefined
      assertParamExists(
        'userPasswordPut',
        'changePasswordRequest',
        changePasswordRequest,
      );
      const localVarPath = '/user/password';
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'PUT',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        changePasswordRequest,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Change user avatar
     * @param {File} avatar Avatar
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userProfileAvatarPut: async (
      avatar: File,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'avatar' is not null or undefined
      assertParamExists('userProfileAvatarPut', 'avatar', avatar);
      const localVarPath = '/user/profile/avatar';
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'PUT',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;
      const localVarFormParams = new ((configuration
          && configuration.formDataCtor)
        || FormData)();

      if (avatar !== undefined) {
        localVarFormParams.append('avatar', avatar as any);
      }

      localVarHeaderParameter['Content-Type'] = 'multipart/form-data';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = localVarFormParams;

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Change user profile
     * @param {UserUpdateRequest} userRequest User data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userProfilePut: async (
      userRequest: UserUpdateRequest,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'userRequest' is not null or undefined
      assertParamExists('userProfilePut', 'userRequest', userRequest);
      const localVarPath = '/user/profile';
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'PUT',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        userRequest,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Search for user by login (max 10)
     * @param {FindUserRequest} findUserRequest User data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userSearchPost: async (
      findUserRequest: FindUserRequest,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'findUserRequest' is not null or undefined
      assertParamExists('userSearchPost', 'findUserRequest', findUserRequest);
      const localVarPath = '/user/search';
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'POST',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      localVarHeaderParameter['Content-Type'] = 'application/json';

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      const headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        findUserRequest,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * UsersApi - functional programming interface
 * @export
 */
export const UsersApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = UsersApiAxiosParamCreator(configuration);
  return {
    /**
     *
     * @summary Get user by id
     * @param {any} id Numeric user id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async userIdGet(
      id: any,
      options?: AxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserResponse>
      > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.userIdGet(
        id,
        options,
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration,
      );
    },
    /**
     *
     * @summary Change user password
     * @param {ChangePasswordRequest} changePasswordRequest Password request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async userPasswordPut(
      changePasswordRequest: ChangePasswordRequest,
      options?: AxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
      > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.userPasswordPut(
        changePasswordRequest,
        options,
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration,
      );
    },
    /**
     *
     * @summary Change user avatar
     * @param {File} avatar Avatar
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async userProfileAvatarPut(
      avatar: File,
      options?: AxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserResponse>
      > {
      const localVarAxiosArgs = await localVarAxiosParamCreator
        .userProfileAvatarPut(avatar, options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration,
      );
    },
    /**
     *
     * @summary Change user profile
     * @param {UserUpdateRequest} userRequest User data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async userProfilePut(
      userRequest: UserUpdateRequest,
      options?: AxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserResponse>
      > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.userProfilePut(
        userRequest,
        options,
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration,
      );
    },
    /**
     *
     * @summary Search for user by login (max 10)
     * @param {FindUserRequest} findUserRequest User data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async userSearchPost(
      findUserRequest: FindUserRequest,
      options?: AxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<Array<UserResponse>>
      > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.userSearchPost(
        findUserRequest,
        options,
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration,
      );
    },
  };
};

/**
 * UsersApi - factory interface
 * @export
 */
export const UsersApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = UsersApiFp(configuration);
  return {
    /**
     *
     * @summary Get user by id
     * @param {any} id Numeric user id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userIdGet(id: any, options?: any): AxiosPromise<UserResponse> {
      return localVarFp
        .userIdGet(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Change user password
     * @param {ChangePasswordRequest} changePasswordRequest Password request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userPasswordPut(
      changePasswordRequest: ChangePasswordRequest,
      options?: any,
    ): AxiosPromise<void> {
      return localVarFp
        .userPasswordPut(changePasswordRequest, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Change user avatar
     * @param {File} avatar Avatar
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userProfileAvatarPut(
      avatar: File,
      options?: any,
    ): AxiosPromise<UserResponse> {
      return localVarFp
        .userProfileAvatarPut(avatar, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Change user profile
     * @param {UserUpdateRequest} userRequest User data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userProfilePut(
      userRequest: UserUpdateRequest,
      options?: any,
    ): AxiosPromise<UserResponse> {
      return localVarFp
        .userProfilePut(userRequest, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Search for user by login (max 10)
     * @param {FindUserRequest} findUserRequest User data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userSearchPost(
      findUserRequest: FindUserRequest,
      options?: any,
    ): AxiosPromise<Array<UserResponse>> {
      return localVarFp
        .userSearchPost(findUserRequest, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * UsersApi - interface
 * @export
 * @interface UsersApi
 */
export interface UsersApiInterface {
  /**
   *
   * @summary Get user by id
   * @param {any} id Numeric user id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UsersApiInterface
   */
  userIdGet(id: any, options?: AxiosRequestConfig): AxiosPromise<UserResponse>

  ;/**
   *
   * @summary Change user password
   * @param {ChangePasswordRequest} changePasswordRequest Password request
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UsersApiInterface
   */
  userPasswordPut(
    changePasswordRequest: ChangePasswordRequest,
    options?: AxiosRequestConfig,
  ): AxiosPromise<void>

  ; /**
   *
   * @summary Change user avatar
   * @param {File} avatar Avatar
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UsersApiInterface
   */
  userProfileAvatarPut(
    avatar: File,
    options?: AxiosRequestConfig,
  ): AxiosPromise<UserResponse>

  ; /**
   *
   * @summary Change user profile
   * @param {UserUpdateRequest} userRequest User data
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UsersApiInterface
   */
  userProfilePut(
    userRequest: UserUpdateRequest,
    options?: AxiosRequestConfig,
  ): AxiosPromise<UserResponse>
  ;
  /**
   *
   * @summary Search for user by login (max 10)
   * @param {FindUserRequest} findUserRequest User data
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UsersApiInterface
   */
  userSearchPost(
    findUserRequest: FindUserRequest,
    options?: AxiosRequestConfig,
  ): AxiosPromise<Array<UserResponse>>;
}

/**
 * UsersApi - object-oriented interface
 * @export
 * @class UsersApi
 * @extends {BaseAPI}
 */
export class UsersApi extends BaseAPI implements UsersApiInterface {
  /**
   *
   * @summary Get user by id
   * @param {any} id Numeric user id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UsersApi
   */
  public userIdGet(id: any, options?: AxiosRequestConfig) {
    return UsersApiFp(this.configuration)
      .userIdGet(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Change user password
   * @param {ChangePasswordRequest} changePasswordRequest Password request
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UsersApi
   */
  public userPasswordPut(
    changePasswordRequest: ChangePasswordRequest,
    options?: AxiosRequestConfig,
  ) {
    return UsersApiFp(this.configuration)
      .userPasswordPut(changePasswordRequest, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Change user avatar
   * @param {File} avatar Avatar
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UsersApi
   */
  public userProfileAvatarPut(avatar: File, options?: AxiosRequestConfig) {
    return UsersApiFp(this.configuration)
      .userProfileAvatarPut(avatar, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Change user profile
   * @param {UserUpdateRequest} userRequest User data
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UsersApi
   */
  public userProfilePut(
    userRequest: UserUpdateRequest,
    options?: AxiosRequestConfig,
  ) {
    return UsersApiFp(this.configuration)
      .userProfilePut(userRequest, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Search for user by login (max 10)
   * @param {FindUserRequest} findUserRequest User data
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UsersApi
   */
  public userSearchPost(
    findUserRequest: FindUserRequest,
    options?: AxiosRequestConfig,
  ) {
    return UsersApiFp(this.configuration)
      .userSearchPost(findUserRequest, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
