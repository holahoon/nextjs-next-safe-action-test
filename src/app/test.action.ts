import { createSafeActionClient } from "next-safe-action";
import { z } from "zod";

const actionClient = createSafeActionClient().use(async ({ next }) => {
  const result = await next({ ctx: null });
  console.log("@@@ safe action @@@ -> middleware: ", result);
  return result;
});

const test = actionClient
  .schema(z.object({ username: z.string() }))
  .action(async ({ parsedInput }) => {
    // parsedInput of type `any`
    const { huh } = parsedInput;
  });
