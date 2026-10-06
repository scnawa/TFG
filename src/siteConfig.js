// Shared site data used by the Navbar and Footer.

export const SERVICE_LINKS = [
  { to: "/shopfitting-construction", label: "SHOPFITTING AND CONSTRUCTION" },
  { to: "/facility-management", label: "FACILITY MANAGEMENT" },
  { to: "/cleaning-page", label: "COMMERCIAL CLEANING" },
  { to: "/security", label: "SECURITY" },
  { to: "/pest-control", label: "PEST CONTROL" },
  { to: "/warehouse-services", label: "WAREHOUSE SERVICES" },
];

export const NAV_LINKS = [
  { to: "/", label: "HOME" },
  { to: "/about", label: "ABOUT" },
  ...SERVICE_LINKS,
];

export const CONTACT_LINK = { to: "/contact-page", label: "CONTACT" };

export const PHONE = { display: "+61 2 9693 2699", href: "tel:+61296932699" };

export const EMAIL = {
  display: "info@totalfacility.com.au",
  href: "mailto:info@totalfacility.com.au",
};
