"use server";

import { getWixAdminClient } from "@/lib/wix-client-admin";

export async function saveFormData(
  formId: string,
  formData: Record<string, string | number>
) {
  const wixClient = getWixAdminClient();
  try {
    console.log(formId, formData);
    const savedItem = await wixClient.items.save(formId, formData);
    return {
      success: true,
      data: savedItem,
    };
  } catch (error) {
    console.error(`Error saving data to form "${formId}":`, error);
    throw new Error("Failed to save form data");
  }
}
