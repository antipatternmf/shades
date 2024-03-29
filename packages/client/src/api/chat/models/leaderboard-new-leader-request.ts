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
 * @interface LeaderboardNewLeaderRequest
 */
export interface LeaderboardNewLeaderRequest {
  /**
   * Leaderboard data object, any type
   * @type {object}
   * @memberof LeaderboardNewLeaderRequest
   */
  data: object;
  /**
   * Which field is used to sort (if new value of the field more than old, data is stored)
   * @type {string}
   * @memberof LeaderboardNewLeaderRequest
   */
  ratingFieldName: string;
  /**
   * Your team name. Used to make unique leaderboard for each project.
   * @type {string}
   * @memberof LeaderboardNewLeaderRequest
   */
  teamName?: string;
}
