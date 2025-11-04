import { Tokens } from "@wix/sdk";
import { cookies } from "next/headers";
import { WIX_SESSION_COOKIE } from "./constants";
import { getWixClient } from "./wix-client-base";
import { cache } from "react";

const getTokensFromCookies = async (): Promise<Tokens | undefined> => {
  const cookieStore = await cookies(); // Call cookies() directly
  try {
    const sessionCookie = cookieStore.get(WIX_SESSION_COOKIE);
    return sessionCookie ? JSON.parse(sessionCookie.value) : JSON.parse("{}");
  } catch (error) {
    console.error("Failed to parse Wix session cookie:", error);
    return undefined;
  }
};

export const getWixServerClient = cache(async () => {
  const tokens = await getTokensFromCookies();
  return getWixClient(tokens);
});
