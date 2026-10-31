import { fetchDropdownDataAPI } from "@/lib/api";
import HeaderClient from "./HeaderClient";

export default async function Header({ site_settings, social_links, services }) {
  const [reasonsData, insuranceData] = await Promise.all([
    fetchDropdownDataAPI("get-reason-for-consultations"),
    fetchDropdownDataAPI("get-insurance-providers"),
  ]);

  return (
    <>
      <HeaderClient
        site_settings={site_settings}
        social_links={social_links}
        services={services}
        reasons={reasonsData.data}
        insurance={insuranceData.data}
        
      />
      
    </>
  );
}
