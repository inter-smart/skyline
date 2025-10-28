import InnerBanner from '@/components/common/InnerBanner'
import PrivacyPolicySection from '@/components/features/privacy/Policies'
import React from 'react'

export default function TermAndCOnditions() {
  return (
    <div>
       <InnerBanner
              img="/images/newsbanner.jpg"
              alt="NEWS"
              subTitle="privacy Policy"
              Title="Privacy Policy"
              description="Be part of a hospital dedicated to excellence, compassion, and innovation."
            />
            <PrivacyPolicySection />
            
    </div>
  )
}