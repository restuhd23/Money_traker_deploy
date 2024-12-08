import { GaxiosOptions } from 'gaxios/build/src/common';
import { Gaxios } from 'gaxios/build/src/gaxios';
export { GaxiosError, GaxiosPromise, GaxiosResponse, Headers, RetryConfig } from 'gaxios/build/src/common';
export { Gaxios, GaxiosOptions };
/**
 * The default instance used when the `request` method is directly
 * invoked.
 */
export declare const instance: Gaxios;
/**
 * Make an HTTP request using the given options.
 * @param opts Options for the request
 */
export declare function request<T>(opts: GaxiosOptions): Promise<import("gaxios/build/src/common").GaxiosResponse<T>>;
