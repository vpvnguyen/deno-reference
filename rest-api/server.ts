import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import router from "./routes/routes.ts";

const PORT = 5000;

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Server running on port ${PORT}`);
await app.listen({ port: PORT });
