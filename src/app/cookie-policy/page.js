import InnerBanner from '@/components/common/InnerBanner'
import PrivacyPolicySection from '@/components/features/privacy/Policies'
import React from 'react'

export default function CookiePolicy() {
  return (
    <div>
       <InnerBanner
              img="/images/newsbanner.jpg"
              alt="cookie policy"
              subTitle="cookie Policy"
              Title="Cookie Policy"
              description="Be part of a hospital dedicated to excellence, compassion, and innovation."
            />
            <PrivacyPolicySection />
            
    </div>
  )
}