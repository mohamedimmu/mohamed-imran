"use server";

import { createContactForSubscription } from "./createContact";
import { subscribeEmail } from "./subscribeEmail";

// This function would be exposed as an API endpoint for your React app
export async function handleSubscriptionRequest(email: string) {
  try {
    const contactResponse = await createContactForSubscription(email);

    if (contactResponse.status === "error") {
      // If contact creation failed, return an error response
      return {
        status: 400, // Or 500, depending on the nature of the contact creation error
        message: contactResponse.message || "Failed to create contact.",
        success: false,
      };
    }

    // Step 2: Subscribe the email address.
    // Assuming subscribeEmail also returns a status or throws an error
    await subscribeEmail(email);

    return {
      status: 200,
      message: "Subscription successful!",
      contact: contactResponse.contact,
      success: true,
    };
  } catch (error: unknown) {
    console.error("Subscription failed:", error);
    return {
      status: 500,
      message: `Subscription failed: ${
        error instanceof Error ? error.message : String(error)
      }`,
      success: false,
    };
  }
}
