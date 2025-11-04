import { env } from "@/env";
import { members } from "@wix/members";
import { createClient, OAuthStrategy, Tokens } from "@wix/sdk";
import { contacts } from "@wix/crm";
import { items } from "@wix/data";
import { emailSubscriptions } from "@wix/email-subscriptions";
import { files } from "@wix/media";

export function getWixClient(tokens: Tokens | undefined) {
  return createClient({
    modules: {
      files,
      members,
      contacts,
      items,
      emailSubscriptions,
    },
    auth: OAuthStrategy({
      clientId: env.NEXT_PUBLIC_CLIENT_ID,
      tokens,
    }),
  });
}

export type WixClient = ReturnType<typeof getWixClient>;
