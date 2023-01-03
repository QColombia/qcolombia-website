import React from "react";

export interface CommunityItemProps {
  title: React.ReactNode;
  icon: React.ReactNode;
  description: React.ReactNode;
  ctaLabel: React.ReactNode;
  onCTAClick: () => void;
}