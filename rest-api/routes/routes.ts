import { Router } from "https://deno.land/x/oak/mod.ts";
import { getProducts } from "../controllers/products.contoller.ts";

const router = new Router();

router.get("/", ({ response }: { response: any }) => {
  response.body = "Heyo World";
});

router.get("/api", ({ response }: { response: any }) => {
  response.body = "API";
});

router.get("/api/products", getProducts);

export default router;
