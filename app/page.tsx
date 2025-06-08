import SelectSkipWrapper from "@/components/select-skip-wrapper";

import { apiHandler } from "@/api";

export default async function Page() {
  const skipOptions = await apiHandler(
    `/skips/by-location?postcode=NR32&area=Lowestoft`
  );
  /**
   * Api call is made on this Server side component to fetch skip options.
   * And pass the data to the SelectSkipWrapper component.
   */
  return (
    <>
      <SelectSkipWrapper skipOptions={skipOptions} />
    </>
  );
}
