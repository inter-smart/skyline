import NewsDetailSection from '@/components/features/insights/detail/NewsDetailSection'
import { fetchFromAPI } from '@/lib/api';

export default async function Page({params}) {

  const {data:Insights, error} = await fetchFromAPI(`blog-details?slug=${params.slug}`);

  return (
    <> 
        <NewsDetailSection Insights={Insights} />
    </>
  )
}
