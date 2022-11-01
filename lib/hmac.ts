import { hmac } from "../../../deps.ts"
const SECRET = Deno.env.get('GS_API_SEC') as string
console.log('WS SECRET', SECRET)
export const getHmac = (msg:string) => hmac("sha256", SECRET , msg , "utf8", "base64");
