import { fetchDropdownDataAPI } from "@/lib/api";
import HeaderClient from "./HeaderClient";

export default async function Header({ site_settings, social_links }) {
  const [servicesData, reasonsData, insuranceData] = await Promise.all([
    fetchDropdownDataAPI("get-services"),
    fetchDropdownDataAPI("get-reason-for-consultations"),
    fetchDropdownDataAPI("get-insurance-providers"),
  ]);

  return (
    <>
      <HeaderClient
        site_settings={site_settings}
        social_links={social_links}
        services={servicesData.data}
        reasons={reasonsData.data}
        insurance={insuranceData.data}
      />
    </>
  );
}
