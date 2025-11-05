"use server";

import { getWixAdminClient } from "@/lib/wix-client-admin";
import { emailSubscriptions } from "@wix/email-subscriptions";

export async function subscribeEmail(email: string) {
  const wixClient = getWixAdminClient();
  const options: emailSubscriptions.UpsertEmailSubscriptionOptions = {
    subscription: {
      email: email,
      subscriptionStatus: emailSubscriptions.SubscriptionEnumStatus.SUBSCRIBED,
    },
  };

  try {
    const response = await wixClient.emailSubscriptions.upsertEmailSubscription(
      options
    );
    return response;
  } catch (error) {
    console.error("Error subscribing email:", error);
    throw error;
  }
}
