// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { AmplifyErrorMap } from '@aws-amplify/core/internals/utils';

export enum RestApiValidationErrorCode {
	NoCredentials = 'NoCredentials',
	InvalidApiName = 'InvalidApiName',
}

export const validationErrorMap: AmplifyErrorMap<RestApiValidationErrorCode> = {
	[RestApiValidationErrorCode.NoCredentials]: {
		message: 'Credentials should not be empty.',
	},
	[RestApiValidationErrorCode.InvalidApiName]: {
		message: 'API name is invalid.',
		recoverySuggestion:
			'Check if the API name matches the one in your configuration or `aws-exports.js`',
	},
};
