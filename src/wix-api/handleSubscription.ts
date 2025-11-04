"use server";

import { createContactForSubscription } from "./createContact";
import { subscribeEmail } from "./subscribeEmail";

// This function would be exposed as an API endpoint for your React app
export async function handleSubscriptionRequest(email: string) {
  try {
    const newContact = await createContactForSubscription(email);

    // Step 2: Subscribe the email address.
    await subscribeEmail(email);

    return {
      status: 200,
      message: "Subscription successful!",
      contact: newContact,
      success: true,
    };
  } catch (error: unknown) {
    console.error("Subscription failed:", error);
    return {
      status: 500,
      message: `Subscription failed: ${
        error instanceof Error ? error.message : String(error)
      }`,
    };
  }
}
