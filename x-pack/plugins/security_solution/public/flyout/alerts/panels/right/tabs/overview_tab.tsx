/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import type { FC } from 'react';
import React, { memo } from 'react';
import { MitreAttack } from '../components/mitre-attack';

/**
 * Overview view displayed in the alert details expandable flyout right section
 */
export const OverviewTab: FC = memo(() => {
  return <MitreAttack />;
});

OverviewTab.displayName = 'OverviewTab';
