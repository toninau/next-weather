import { z } from 'zod';

const envSchema = z.object({
  WEATHER_API_KEY: z.coerce.string(),
  // NUMBER_VARIABLE: z.coerce.number(),
  // BOOLEAN_VARIABLE: z.enum(['true', 'false']).transform(val => val === 'true'),
});

const envVariables = envSchema.parse(process.env);

export default envVariables;
