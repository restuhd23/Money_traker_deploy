/**
 * Copyright 2017 Google Inc. All Rights Reserved.
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
import { GoogleAuth } from 'google-auth-library/build/src/auth/googleauth';
export { Compute, ComputeOptions } from 'google-auth-library/build/src/auth/computeclient';
export { CredentialBody, CredentialRequest, Credentials, JWTInput } from 'google-auth-library/build/src/auth/credentials';
export { GCPEnv } from 'google-auth-library/build/src/auth/envDetect';
export { GoogleAuthOptions } from 'google-auth-library/build/src/auth/googleauth';
export { IAMAuth, RequestMetadata } from 'google-auth-library/build/src/auth/iam';
export { Claims, JWTAccess } from 'google-auth-library/build/src/auth/jwtaccess';
export { JWT, JWTOptions } from 'google-auth-library/build/src/auth/jwtclient';
export { Certificates, CodeChallengeMethod, GenerateAuthUrlOpts, GetTokenOptions, OAuth2Client, OAuth2ClientOptions, RefreshOptions, TokenInfo, VerifyIdTokenOptions } from 'google-auth-library/build/src/auth/oauth2client';
export { UserRefreshClient, UserRefreshClientOptions } from 'google-auth-library/build/src/auth/refreshclient';
export { DefaultTransporter } from 'google-auth-library/build/src/transporters';
declare const auth: GoogleAuth;
export { auth, GoogleAuth };
