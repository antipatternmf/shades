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
import { BASE_PATH, RequestArgs, BaseAPI } from '../base';
import {
  SignInRequest,
  SignUpRequest,
  SignUpResponse,
  UserResponse,
} from '../models';

/**
 * AuthApi - axios parameter creator
 * @export
 */
export const AuthApiAxiosParamCreator = function (
  configuration?: Configuration,
) {
  return {
    /**
     *
     * @summary Logout
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authLogoutPost: async (
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = '/auth/logout';
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
     * @summary Sign in
     * @param {SignInRequest} signInRequest User data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authSigninPost: async (
      signInRequest: SignInRequest,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'signInRequest' is not null or undefined
      assertParamExists('authSigninPost', 'signInRequest', signInRequest);
      const localVarPath = '/auth/signin';
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
        signInRequest,
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
     * @summary Sign up (create user)
     * @param {SignUpRequest} signUpRequest User data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authSignupPost: async (
      signUpRequest: SignUpRequest,
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'signUpRequest' is not null or undefined
      assertParamExists('authSignupPost', 'signUpRequest', signUpRequest);
      const localVarPath = '/auth/signup';
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
        signUpRequest,
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
     * @summary Get user info
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authUserGet: async (
      options: AxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = '/auth/user';
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
  };
};

/**
 * AuthApi - functional programming interface
 * @export
 */
export const AuthApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = AuthApiAxiosParamCreator(configuration);
  return {
    /**
     *
     * @summary Logout
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async authLogoutPost(
      options?: AxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
      > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.authLogoutPost(
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
     * @summary Sign in
     * @param {SignInRequest} signInRequest User data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async authSigninPost(
      signInRequest: SignInRequest,
      options?: AxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
      > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.authSigninPost(
        signInRequest,
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
     * @summary Sign up (create user)
     * @param {SignUpRequest} signUpRequest User data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async authSignupPost(
      signUpRequest: SignUpRequest,
      options?: AxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<SignUpResponse>
      > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.authSignupPost(
        signUpRequest,
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
     * @summary Get user info
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async authUserGet(
      options?: AxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserResponse>
      > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.authUserGet(
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
 * AuthApi - factory interface
 * @export
 */
export const AuthApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = AuthApiFp(configuration);
  return {
    /**
     *
     * @summary Logout
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authLogoutPost(options?: any): AxiosPromise<void> {
      return localVarFp
        .authLogoutPost(options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Sign in
     * @param {SignInRequest} signInRequest User data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authSigninPost(
      signInRequest: SignInRequest,
      options?: any,
    ): AxiosPromise<void> {
      return localVarFp
        .authSigninPost(signInRequest, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Sign up (create user)
     * @param {SignUpRequest} signUpRequest User data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authSignupPost(
      signUpRequest: SignUpRequest,
      options?: any,
    ): AxiosPromise<SignUpResponse> {
      return localVarFp
        .authSignupPost(signUpRequest, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get user info
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authUserGet(options?: any): AxiosPromise<UserResponse> {
      return localVarFp
        .authUserGet(options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * AuthApi - interface
 * @export
 * @interface AuthApi
 */
export interface AuthApiInterface {
  /**
   *
   * @summary Logout
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AuthApiInterface
   */
  authLogoutPost(options?: AxiosRequestConfig): AxiosPromise<void>;

  /**
   *
   * @summary Sign in
   * @param {SignInRequest} signInRequest User data
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AuthApiInterface
   */
  authSigninPost(
    signInRequest: SignInRequest,
    options?: AxiosRequestConfig,
  ): AxiosPromise<void>;

  /**
   *
   * @summary Sign up (create user)
   * @param {SignUpRequest} signUpRequest User data
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AuthApiInterface
   */
  authSignupPost(
    signUpRequest: SignUpRequest,
    options?: AxiosRequestConfig,
  ): AxiosPromise<SignUpResponse>;

  /**
   *
   * @summary Get user info
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AuthApiInterface
   */
  authUserGet(options?: AxiosRequestConfig): AxiosPromise<UserResponse>;
}

/**
 * AuthApi - object-oriented interface
 * @export
 * @class AuthApi
 * @extends {BaseAPI}
 */
class AuthApi extends BaseAPI implements AuthApiInterface {
  /**
   *
   * @summary Logout
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AuthApi
   */
  public authLogoutPost(options?: AxiosRequestConfig) {
    return AuthApiFp(this.configuration)
      .authLogoutPost(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Sign in
   * @param {SignInRequest} signInRequest User data
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AuthApi
   */
  public authSigninPost(
    signInRequest: SignInRequest,
    options?: AxiosRequestConfig,
  ) {
    return AuthApiFp(this.configuration)
      .authSigninPost(signInRequest, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Sign up (create user)
   * @param {SignUpRequest} signUpRequest User data
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AuthApi
   */
  public authSignupPost(
    signUpRequest: SignUpRequest,
    options?: AxiosRequestConfig,
  ) {
    return AuthApiFp(this.configuration)
      .authSignupPost(signUpRequest, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Get user info
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AuthApi
   */
  public authUserGet(options?: AxiosRequestConfig) {
    return AuthApiFp(this.configuration)
      .authUserGet(options)
      .then((request) => request(this.axios, this.basePath));
  }
}

globalAxios.defaults.withCredentials = true;

export const authApi = new AuthApi();
