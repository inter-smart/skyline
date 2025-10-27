import InnerBanner from '@/components/common/InnerBanner'
import Policies from '@/components/features/privacyPolicy/Policy'
import React from 'react'

export default function PrivacyPolicy() {
  return (
    <div>
       <InnerBanner
              img="/images/newsbanner.jpg"
              alt="NEWS"
              subTitle="NEWS"
              Title="News & Insights"
              description="Be part of a hospital dedicated to excellence, compassion, and innovation."
            />


            <Policies />
    </div>
  )
}