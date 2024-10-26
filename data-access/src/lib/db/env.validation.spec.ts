import { HttpException, HttpStatus } from '@nestjs/common';
import { EnvValidation, validateAndLoad, validateResults } from './env.validation';
import { validateSync } from 'class-validator';

// Mocking class-validator and class-transformer for isolated testing
jest.mock('class-validator', () => ({
  validateSync: jest.fn(),
}));

jest.mock('class-transformer', () => ({
  plainToInstance: jest.fn(),
}));

describe('EnvValidation', () => {
  const mockEnvVariables = {
    DATASOURCE_USERNAME: 'user',
    DATASOURCE_PASSWORD: 'password',
    DATASOURCE_DATABASE: 'database',
    DATASOURCE_HOST: 'localhost',
    DATASOURCE_PORT: 5432,
  };
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('validateResults', () => {
    it('should return OK for all valid properties', () => {
      const validated: EnvValidation = {
        DATASOURCE_USERNAME: 'user',
        DATASOURCE_PASSWORD: 'password',
        DATASOURCE_DATABASE: 'db',
        DATASOURCE_HOST: 'localhost',
        DATASOURCE_PORT: 5432,
      } as EnvValidation;

      const result = validateResults(validated);

      expect(result).toEqual([
        'DATASOURCE_USERNAME: OK',
        'DATASOURCE_PASSWORD: OK',
        'DATASOURCE_DATABASE: OK',
        'DATASOURCE_HOST: OK',
        'DATASOURCE_PORT: OK',
      ]);
    });

    it('should indicate undefined for missing properties', () => {
      const validated: EnvValidation = {
        DATASOURCE_USERNAME: 'user',
        DATASOURCE_PASSWORD: undefined,
        DATASOURCE_DATABASE: 'db',
        DATASOURCE_HOST: 'localhost',
        DATASOURCE_PORT: null
      } as unknown as EnvValidation;

      const result = validateResults(validated);

      expect(result).toEqual([
        'DATASOURCE_USERNAME: OK',
        'DATASOURCE_PASSWORD: undefined',
        'DATASOURCE_DATABASE: OK',
        'DATASOURCE_HOST: OK',
        'DATASOURCE_PORT: undefined',
      ]);
    });
  });

  describe('validateAndLoad', () => {
    it('should validate and return validated environment', () => {
      const envs = {
        DATASOURCE_USERNAME: 'user',
        DATASOURCE_PASSWORD: 'password',
        DATASOURCE_DATABASE: 'db',
        DATASOURCE_HOST: 'localhost',
        DATASOURCE_PORT: 5432,
      };

      // Mocking the return of plainToInstance and validateSync
      (require('class-transformer').plainToInstance as jest.Mock).mockReturnValue(envs);
      (require('class-validator').validateSync as jest.Mock).mockReturnValue([]);

      const result = validateAndLoad(envs);

      expect(result).toEqual(envs);
    });

    it('should throw HttpException on validation errors', () => {
      const envs = {
        DATASOURCE_USERNAME: 'user',
        DATASOURCE_PASSWORD: '',
        DATASOURCE_DATABASE: 'db',
        DATASOURCE_HOST: 'localhost',
        DATASOURCE_PORT: -1,
      };

      const errors = [
        { property: 'DATASOURCE_PASSWORD', constraints: { isNotEmpty: 'DATASOURCE_PASSWORD should not be empty' } },
        { property: 'DATASOURCE_PORT', constraints: { isPositive: 'DATASOURCE_PORT must be a positive number' } },
      ];

      (require('class-transformer').plainToInstance as jest.Mock).mockReturnValue(envs);
      (require('class-validator').validateSync as jest.Mock).mockReturnValue(errors);

      expect(() => validateAndLoad(envs)).toThrow(HttpException);
      expect(() => validateAndLoad(envs)).toThrowError(new HttpException(
        {
          errorType: 'configErr',
          where: 'ValidateDBEnv',
          date: expect.any(String),
          data: null,
          message: expect.stringContaining('2 variable(s) failed validation:'),
        },
        HttpStatus.INTERNAL_SERVER_ERROR
      ));
    });
  });

  it('should validate and return the validated environment variables', () => {
    (validateSync as jest.Mock).mockReturnValue([]); // No validation errors

    const result = validateAndLoad(mockEnvVariables);

    expect(result).toBeInstanceOf(EnvValidation);
    expect(result.DATASOURCE_USERNAME).toBe(mockEnvVariables.DATASOURCE_USERNAME);
    expect(result.DATASOURCE_PASSWORD).toBe(mockEnvVariables.DATASOURCE_PASSWORD);
    expect(result.DATASOURCE_DATABASE).toBe(mockEnvVariables.DATASOURCE_DATABASE);
    expect(result.DATASOURCE_HOST).toBe(mockEnvVariables.DATASOURCE_HOST);
    expect(result.DATASOURCE_PORT).toBe(mockEnvVariables.DATASOURCE_PORT);
  });
});
