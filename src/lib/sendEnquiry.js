// Sends a contact-form enquiry by email through Web3Forms (https://web3forms.com).
// Emails go to the address the access key was registered with.
//
// The access key is set in .env.local as VITE_WEB3FORMS_ACCESS_KEY.
// Web3Forms keys are designed to be used from the browser, so it is safe for
// this value to end up in the built JavaScript.

const ENDPOINT = "https://api.web3forms.com/submit";
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

export async function sendEnquiry({ firstName, lastName, email, phone, message, botcheck }) {
  if (!ACCESS_KEY) {
    throw new Error("Contact form is not configured: VITE_WEB3FORMS_ACCESS_KEY is missing.");
  }

  const name = `${firstName} ${lastName}`.trim();

  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: ACCESS_KEY,
      subject: `New website enquiry from ${name}`,
      from_name: "Total Facility Group website",
      // Lets the team hit "Reply" in their inbox to answer the enquirer directly
      replyto: email,
      name,
      email,
      phone: phone || "Not provided",
      message,
      // Honeypot: real visitors never fill this in; Web3Forms drops spam that does
      botcheck,
    }),
  });

  const result = await response.json().catch(() => ({}));

  if (!response.ok || !result.success) {
    throw new Error(result.message || `Enquiry failed with status ${response.status}`);
  }

  return result;
}
