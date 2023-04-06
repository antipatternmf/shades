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
 * @interface LeaderboardRequest
 */
export interface LeaderboardRequest {
  /**
   * Which field is used to sort
   * @type {string}
   * @memberof LeaderboardRequest
   */
  ratingFieldName: string;
  /**
   * Used to paginate between pages.
   * If limit is 10,
   * then for the 1st page - cursor=0,
   * for the 2nd page - cursor=10.
   * @type {number}
   * @memberof LeaderboardRequest
   */
  cursor: number;
  /**
   * Maximum amount of leaders to return
   * @type {number}
   * @memberof LeaderboardRequest
   */
  limit: number;
}