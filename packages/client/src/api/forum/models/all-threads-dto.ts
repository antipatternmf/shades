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

// May contain unused imports in some cases
// @ts-ignore
import { ThreadType } from './thread-type';

/**
 *
 * @export
 * @interface AllThreadsDto
 */
export interface AllThreadsDto {
  /**
   *
   * @type {Array<ThreadType>}
   * @memberof AllThreadsDto
   */
  items: Array<ThreadType>;
  /**
   *
   * @type {number}
   * @memberof AllThreadsDto
   */
  total: number;
  /**
   *
   * @type {number}
   * @memberof AllThreadsDto
   */
  offset: number;
  /**
   *
   * @type {number}
   * @memberof AllThreadsDto
   */
  limit: number;
}