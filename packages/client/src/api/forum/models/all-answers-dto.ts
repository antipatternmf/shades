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
import { PostType } from './post-type';

/**
 *
 * @export
 * @interface AllAnswersDto
 */
export interface AllAnswersDto {
  /**
   *
   * @type {Array<PostType>}
   * @memberof AllAnswersDto
   */
  items: Array<PostType>;
  /**
   *
   * @type {number}
   * @memberof AllAnswersDto
   */
  parentId: number;
  /**
   *
   * @type {number}
   * @memberof AllAnswersDto
   */
  total: number;
  /**
   *
   * @type {number}
   * @memberof AllAnswersDto
   */
  offset: number;
  /**
   *
   * @type {number}
   * @memberof AllAnswersDto
   */
  limit: number;
}