"use server";

import { getWixServerClient } from "@/lib/wix-client-server";
import { contacts } from "@wix/crm";

export async function createContactForSubscription(emailAddress: string) {
  const wixClient = await getWixServerClient();
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
    const newContact = await wixClient.contacts.createContact(contactInfo);
    return newContact;
  } catch (error) {
    console.error(error);
  }
}
