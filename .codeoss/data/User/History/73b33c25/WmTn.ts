/**
 * Copyright 2014-2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { GoogleAuthOptions, Service } from '@google-cloud/common';
import * as r from 'request';
import { Readable } from 'stream';
import { Bucket } from '@google-cloud/storage/build/src/bucket';
import { Channel } from '@google-cloud/storage/build/src/channel';
import { File } from '@google-cloud/storage/build/src/file';
export interface GetServiceAccountOptions {
    userProject?: string;
}
export interface ServiceAccount {
    emailAddress?: string;
}
export declare type GetServiceAccountResponse = [ServiceAccount, r.Response];
export interface GetServiceAccountCallback {
    (err: Error | null, serviceAccount?: ServiceAccount, apiResponse?: r.Response): void;
}
export interface CreateBucketQuery {
    project: string;
    userProject: string;
}
export interface StorageOptions extends GoogleAuthOptions {
    autoRetry?: boolean;
    maxRetries?: number;
    promise?: typeof Promise;
}
export interface BucketOptions {
    kmsKeyName?: string;
    userProject?: string;
}
export interface CreateBucketRequest {
    coldline?: boolean;
    dra?: boolean;
    multiRegional?: boolean;
    nearline?: boolean;
    regional?: boolean;
    requesterPays?: boolean;
    retentionPolicy?: object;
    userProject?: string;
    location?: string;
}
export declare type CreateBucketResponse = [Bucket, r.Response];
export interface BucketCallback {
    (err: Error | null, bucket?: Bucket | null, apiResponse?: r.Response): void;
}
export declare type GetBucketsResponse = [Bucket[]];
export interface GetBucketsCallback {
    (err: Error | null, buckets: Bucket[]): void;
}
export interface GetBucketsRequest {
    prefix?: string;
    project?: string;
    autoPaginate?: boolean;
    maxApiCalls?: number;
    maxResults?: number;
    pageToken?: string;
    userProject?: string;
}
/*! Developer Documentation
 *
 * Invoke this method to create a new Storage object bound with pre-determined
 * configuration options. For each object that can be created (e.g., a bucket),
 * there is an equivalent static and instance method. While they are classes,
 * they can be instantiated without use of the `new` keyword.
 */
/**
 * <h4>ACLs</h4>
 * Cloud Storage uses access control lists (ACLs) to manage object and
 * bucket access. ACLs are the mechanism you use to share files with other users
 * and allow other users to access your buckets and files.
 *
 * To learn more about ACLs, read this overview on
 * [Access Control](https://cloud.google.com/storage/docs/access-control).
 *
 * @see [Cloud Storage overview]{@link https://cloud.google.com/storage/docs/overview}
 * @see [Access Control]{@link https://cloud.google.com/storage/docs/access-control}
 *
 * @class
 */
export declare class Storage extends Service {
    /**
     * {@link Bucket} class.
     *
     * @name Storage.Bucket
     * @see Bucket
     * @type {Constructor}
     */
    static Bucket: typeof Bucket;
    /**
     * {@link Channel} class.
     *
     * @name Storage.Channel
     * @see Channel
     * @type {Constructor}
     */
    static Channel: typeof Channel;
    /**
     * {@link File} class.
     *
     * @name Storage.File
     * @see File
     * @type {Constructor}
     */
    static File: typeof File;
    /**
     * Cloud Storage uses access control lists (ACLs) to manage object and
     * bucket access. ACLs are the mechanism you use to share objects with other
     * users and allow other users to access your buckets and objects.
     *
     * This object provides constants to refer to the three permission levels that
     * can be granted to an entity:
     *
     *   - `gcs.acl.OWNER_ROLE` - ("OWNER")
     *   - `gcs.acl.READER_ROLE` - ("READER")
     *   - `gcs.acl.WRITER_ROLE` - ("WRITER")
     *
     * @see [About Access Control Lists]{@link https://cloud.google.com/storage/docs/access-control/lists}
     *
     * @name Storage.acl
     * @type {object}
     * @property {string} OWNER_ROLE
     * @property {string} READER_ROLE
     * @property {string} WRITER_ROLE
     *
     * @example
     * const {Storage} = require('@google-cloud/storage');
     * const storage = new Storage();
     * const albums = storage.bucket('albums');
     *
     * //-
     * // Make all of the files currently in a bucket publicly readable.
     * //-
     * const options = {
     *   entity: 'allUsers',
     *   role: storage.acl.READER_ROLE
     * };
     *
     * albums.acl.add(options, function(err, aclObject) {});
     *
     * //-
     * // Make any new objects added to a bucket publicly readable.
     * //-
     * albums.acl.default.add(options, function(err, aclObject) {});
     *
     * //-
     * // Grant a user ownership permissions to a bucket.
     * //-
     * albums.acl.add({
     *   entity: 'user-useremail@example.com',
     *   role: storage.acl.OWNER_ROLE
     * }, function(err, aclObject) {});
     *
     * //-
     * // If the callback is omitted, we'll return a Promise.
     * //-
     * albums.acl.add(options).then(function(data) {
     *   const aclObject = data[0];
     *   const apiResponse = data[1];
     * });
     */
    static acl: {
        OWNER_ROLE: string;
        READER_ROLE: string;
        WRITER_ROLE: string;
    };
    /**
     * Reference to {@link Storage.acl}.
     *
     * @name Storage#acl
     * @see Storage.acl
     */
    acl: typeof Storage.acl;
    /**
     * Get {@link Bucket} objects for all of the buckets in your project as
     * a readable object stream.
     *
     * @method Storage#getBucketsStream
     * @param {GetBucketsRequest} [query] Query object for listing buckets.
     * @returns {ReadableStream} A readable stream that emits {@link Bucket} instances.
     *
     * @example
     * storage.getBucketsStream()
     *   .on('error', console.error)
     *   .on('data', function(bucket) {
     *     // bucket is a Bucket object.
     *   })
     *   .on('end', function() {
     *     // All buckets retrieved.
     *   });
     *
     * //-
     * // If you anticipate many results, you can end a stream early to prevent
     * // unnecessary processing and API requests.
     * //-
     * storage.getBucketsStream()
     *   .on('data', function(bucket) {
     *     this.end();
     *   });
     */
    getBucketsStream: () => Readable;
    /**
     * @typedef {object} StorageOptions
     * @property {string} [projectId] The project ID from the Google Developer's
     *     Console, e.g. 'grape-spaceship-123'. We will also check the environment
     *     variable `GCLOUD_PROJECT` for your project ID. If your app is running
     * in an environment which supports {@link
     * https://cloud.google.com/docs/authentication/production#providing_credentials_to_your_application
     * Application Default Credentials}, your project ID will be detected
     * automatically.
     * @property {string} [keyFilename] Full path to the a .json, .pem, or .p12 key
     *     downloaded from the Google Developers Console. If you provide a path to
     * a JSON file, the `projectId` option above is not necessary. NOTE: .pem and
     *     .p12 require you to specify the `email` option as well.
     * @property {string} [email] Account email address. Required when using a .pem
     *     or .p12 keyFilename.
     * @property {object} [credentials] Credentials object.
     * @property {string} [credentials.client_email]
     * @property {string} [credentials.private_key]
     * @property {boolean} [autoRetry=true] Automatically retry requests if the
     *     response is related to rate limits or certain intermittent server
     * errors. We will exponentially backoff subsequent requests by default.
     * @property {number} [maxRetries=3] Maximum number of automatic retries
     *     attempted before returning the error.
     * @property {Constructor} [promise] Custom promise module to use instead of
     *     native Promises.
     */
    /**
     * Constructs the Storage client.
     *
     * @example <caption>Create a client that uses Application Default Credentials
     * (ADC)</caption> const {Storage} = require('@google-cloud/storage'); const
     * storage = new Storage();
     *
     * @example <caption>Create a client with explicit credentials</caption>
     * storage');/storage');
     * const storage = new Storage({
     *   projectId: 'your-project-id',
     *   keyFilename: '/path/to/keyfile.json'
     * });
     *
     * @param {StorageOptions} [options] Configuration options.
     */
    constructor(options?: StorageOptions);
    /**
     * Get a reference to a Cloud Storage bucket.
     *
     * @param {string} name Name of the bucket.
     * @param {object} [options] Configuration object.
     * @param {string} [options.kmsKeyName] A Cloud KMS key that will be used to
     *     encrypt objects inserted into this bucket, if no encryption method is
     *     specified.
     * @param {string} [options.userProject] User project to be billed for all
     *     requests made from this Bucket object.
     * @returns {Bucket}
     * @see Bucket
     *
     * @example
     * const {Storage} = require('@google-cloud/storage');
     * const storage = new Storage();
     * const albums = storage.bucket('albums');
     * const photos = storage.bucket('photos');
     */
    bucket(name: string, options?: BucketOptions): Bucket;
    /**
     * Reference a channel to receive notifications about changes to your bucket.
     *
     * @param {string} id The ID of the channel.
     * @param {string} resourceId The resource ID of the channel.
     * @returns {Channel}
     * @see Channel
     *
     * @example
     * const {Storage} = require('@google-cloud/storage');
     * const storage = new Storage();
     * const channel = storage.channel('id', 'resource-id');
     */
    channel(id: string, resourceId: string): Channel;
    createBucket(name: string, metadata?: CreateBucketRequest): Promise<CreateBucketResponse>;
    createBucket(name: string, callback: BucketCallback): void;
    createBucket(name: string, metadata: CreateBucketRequest, callback: BucketCallback): void;
    createBucket(name: string, metadata: CreateBucketRequest, callback: BucketCallback): void;
    getBuckets(options?: GetBucketsRequest): Promise<GetBucketsResponse>;
    getBuckets(options: GetBucketsRequest, callback: GetBucketsCallback): void;
    getBuckets(callback: GetBucketsCallback): void;
    getServiceAccount(options?: GetServiceAccountOptions): Promise<GetServiceAccountResponse>;
    getServiceAccount(options: GetServiceAccountOptions, callback: GetServiceAccountCallback): void;
    getServiceAccount(callback: GetServiceAccountCallback): void;
}
