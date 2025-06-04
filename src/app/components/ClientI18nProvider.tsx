'use client';

import '../components/i18n'; // Make sure this points to your i18n.ts
import React from 'react';

export default function ClientI18nProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
