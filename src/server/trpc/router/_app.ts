// @ts-nocheck
import { router } from "../trpc";
import { guestbookRouter } from "./guestbook.ts"

export const appRouter = router({
  guestbook: guestbookRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;