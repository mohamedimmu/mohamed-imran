"use server";

import { getWixAdminClient } from "@/lib/wix-client-admin";
import { contacts } from "@wix/crm";

// Define a consistent return type
interface CreateContactResponse {
  status: "success" | "error";
  message?: string;
  contact?: contacts.Contact;
}

export async function createContactForSubscription(
  emailAddress: string
): Promise<CreateContactResponse> {
  const wixClient = getWixAdminClient();
  const contactInfo: contacts.ContactInfo = {
    emails: {
      items: [
        {
          email: emailAddress,
          tag: "MAIN",
          primary: true,
        },
      ],
    },
  };

  try {
    const createContactResponse = await wixClient.contacts.createContact(contactInfo);
    return {
      status: "success",
      contact: createContactResponse.contact,
      message: "Contact created successfully.",
    };
  } catch (error: unknown) {
    console.error("Error creating contact for subscription:", error);

    let errorMessage = "Failed to create contact.";
    if ((error as { details?: { applicationError?: { code: string } } }).details?.applicationError?.code === "CONTACT_ALREADY_EXISTS") {
      errorMessage = "Contact with this email already exists.";
    } else if (error instanceof Error) {
      errorMessage = error.message;
    }

    return {
      status: "error",
      message: errorMessage,
    };
  }
}
