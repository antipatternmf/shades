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
 * @interface UserResponse
 */
export interface UserResponse {
  /**
   * User id
   * @type {number}
   * @memberof UserResponse
   */
  id: number
  /**
   * First name
   * @type {string}
   * @memberof UserResponse
   */
  first_name: string
  /**
   * Second name
   * @type {string}
   * @memberof UserResponse
   */
  second_name: string
  /**
   * Display name
   * @type {string}
   * @memberof UserResponse
   */
  display_name: string
  /**
   * User login - unique
   * @type {string}
   * @memberof UserResponse
   */
  login: string
  /**
   * Email
   * @type {string}
   * @memberof UserResponse
   */
  email: string
  /**
   * Phone
   * @type {string}
   * @memberof UserResponse
   */
  phone: string
  /**
   * Avatar
   * @type {string}
   * @memberof UserResponse
   */
  avatar: string
}