import { z } from "zod";

export const movieSchema = z.object({
  name: z.string().min(1).max(255),
  category: z.string().min(1).max(100),
  year: z
    .number()
    .int()
    .gte(1888)
    .lte(new Date().getFullYear() + 1),
  director: z.string().min(1).max(255),
  duration: z.number().int().positive(), // minutes
  rating: z.number().gte(0).lte(10),
});

export function parseMoviePayload(payload) {
  // coerce numbers in case they come as strings
  const coerced = {
    ...payload,
    year: Number(payload.year),
    duration: Number(payload.duration),
    rating: Number(payload.rating),
  };
  return movieSchema.parse(coerced);
}
