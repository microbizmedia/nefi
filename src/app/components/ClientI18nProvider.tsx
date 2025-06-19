'use client';

import React, { useState, useEffect } from 'react';
import i18n from '../components/i18n'; // your i18n instance

export default function ClientI18nProvider({ children }: { children: React.ReactNode }) {
    const [ready, setReady] = useState(false);

  useEffect(() => {
    if (i18n.isInitialized) {
      setReady(true);
    } else {
      i18n.on('initialized', () => setReady(true));
    }
  }, []);

  if (!ready) {
    // Render fallback UI or nothing until i18n is ready on client
    return null;
  }
  return <>{children}</>;
}
