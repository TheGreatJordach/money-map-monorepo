
import { plainToInstance } from 'class-transformer';
import { HttpException, HttpStatus } from '@nestjs/common';
import { IsInt, IsNotEmpty, IsPositive, IsString, validateSync } from 'class-validator';

/**
 * Class for validating environment variables related to database configuration.
 */
export class EnvValidation {

 @IsString()
 @IsNotEmpty()
  DATASOURCE_USERNAME!: string;

  @IsString()
  @IsNotEmpty()
  DATASOURCE_PASSWORD!: string;

  @IsString()
  @IsNotEmpty()
  DATASOURCE_DATABASE!: string;

  @IsString()
  @IsNotEmpty()
  DATASOURCE_HOST!: string;

  @IsInt()
  @IsPositive()
  DATASOURCE_PORT!: number;
}

/**
 * Defines a type representing the keys of the properties in the EnvValidation class.
 */
type EnvValidationKeys = keyof EnvValidation;

/**
 * Validates the properties of the provided EnvValidation instance.
 * Checks if the specified properties are not undefined or null.
 * Returns an array of strings indicating the validation status of each property.
 *
 * @param validated - The EnvValidation instance to validate.
 * @returns An array of strings showing the validation status of each property.
 */
export function validateResults(validated: EnvValidation) {
  const validResults: string[] = [];

  // Use the keyof operator for better type safety
  const properties: EnvValidationKeys[] = [
    'DATASOURCE_USERNAME',
    'DATASOURCE_PASSWORD',
    'DATASOURCE_DATABASE',
    'DATASOURCE_HOST',
    'DATASOURCE_PORT',
  ];

  properties.forEach((property) => {
    if (validated[property] !== undefined && validated[property] !== null) {
      validResults.push(`${property}: OK`);
    } else {
      validResults.push(`${property}: undefined`);
    }
  });

  return validResults;
}

/**
 * Validates the environment variables and loads them into an instance of EnvValidation.
 * Throws an HttpException if any variables fail validation.
 * Returns the validated environment if no errors are found.
 *
 * @param envs - Record<string, unknown> containing environment variables to validate.
 * @param processResult - Optional function to process validation results, defaults to validateResults.
 * @returns The validated environment if successful.
 */
export function validateAndLoad(
  envs: Record<string, unknown>,
  processResult: typeof validateResults = validateResults
) {
  const validated = plainToInstance(EnvValidation, envs, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(validated, {
    skipMissingProperties: false,
  });

  // Create an array to store messages
  const validationResults: string[] = processResult(validated);

  if (errors.length > 0) {
    const errorMessage = `${errors.length} variable(s) failed validation:\n${validationResults.join('\n')}`;

    throw new HttpException(
      {
        errorType: 'configErr',
        where: 'ValidateDBEnv',
        date: new Date().toISOString(),
        data: null,
        message: errorMessage,
      },
      HttpStatus.INTERNAL_SERVER_ERROR
    );
  }

  // If there are no errors, return the validated environment
  return validated;
}
