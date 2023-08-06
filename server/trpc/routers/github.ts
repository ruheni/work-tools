import { z } from 'zod';
import { publicProcedure, router } from '../trpc';

export const githubRouter = router({
  repos: publicProcedure.input(),

  hello: publicProcedure
    .input(
      z.object({
        text: z.string().nullish(),
      })
    )
    .query(({ input }) => {
      return {
        greeting: `hello ${input?.text ?? 'world'}`,
      };
    }),
});

// export type definition of API
export type AppRouter = typeof githubRouter;
