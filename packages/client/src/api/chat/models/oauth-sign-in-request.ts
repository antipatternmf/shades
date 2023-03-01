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

/**
 *
 * @export
 * @interface OauthSignInRequest
 */
export interface OauthSignInRequest {
  /**
   * User code from Yandex
   * @type {string}
   * @memberof OauthSignInRequest
   */
  code: string
  /**
   * Redirect uri that you are using for oauth
   * @type {string}
   * @memberof OauthSignInRequest
   */
  redirect_uri: string
}
