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
import { UserType } from './user-type';

/**
 * 
 * @export
 * @interface SiteThemeType
 */
export interface SiteThemeType {
    /**
     * 
     * @type {number}
     * @memberof SiteThemeType
     */
    'id': number;
    /**
     * 
     * @type {string}
     * @memberof SiteThemeType
     */
    'theme': string;
    /**
     * 
     * @type {string}
     * @memberof SiteThemeType
     */
    'description'?: string;
    /**
     * 
     * @type {UserType}
     * @memberof SiteThemeType
     */
    'owner': UserType;
    /**
     * 
     * @type {string}
     * @memberof SiteThemeType
     */
    'updatedAt': string;
    /**
     * 
     * @type {string}
     * @memberof SiteThemeType
     */
    'createdAt': string;
}

