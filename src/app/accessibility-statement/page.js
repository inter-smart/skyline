import InnerBanner from '@/components/common/InnerBanner'
import PrivacyPolicySection from '@/components/features/privacy/Policies'
import React from 'react'

export default function AccessibilityStatement() {
  return (
    <div>
       <InnerBanner
              img="/images/newsbanner.jpg"
              alt="Accessibility Statement"
              subTitle="accessibility Statement"
              Title="Accessibility Statement"
              description="Be part of a hospital dedicated to excellence, compassion, and innovation."
            />
            <PrivacyPolicySection />
            
    </div>
  )
}