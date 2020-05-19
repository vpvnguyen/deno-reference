// take first argument and store it
const thisFile = Deno.args[0];

// make a request to the argument passed
const res = await fetch(thisFile);

// parse response body as `ArrayBuffer`, await the response and conert it into a `Uint8Array`
const body = new Uint8Array(await res.arrayBuffer());

// write out the response to stdout
await Deno.stdout.write(body);

// run: deno run --allow-net=example.com https://deno.land/std/examples/curl.ts https://example.com
// example: deno run --allow-net=example.com https://deno.land/std/examples/curl.ts https://example.com
