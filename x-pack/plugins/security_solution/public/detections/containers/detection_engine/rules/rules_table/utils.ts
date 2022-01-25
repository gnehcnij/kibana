/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { get } from 'lodash';
import { FilterOptions, Rule, SortingOptions } from '../types';

/**
 * Merge new rules into the currently cached rules
 *
 * @param currentRules
 * @param newRules
 */
export function mergeRules(currentRules: Rule[], newRules: Rule[]): Rule[] {
  const currentRuleIds = currentRules.map((r) => r.id);
  return newRules.reduce(
    (mergedRules, newRule) =>
      currentRuleIds.includes(newRule.id)
        ? mergedRules.map((rule) => (newRule.id === rule.id ? newRule : rule))
        : [...mergedRules, newRule],
    currentRules
  );
}

/**
 * Returns a comparator function to be used with .sort()
 *
 * @param sortingOptions SortingOptions
 */
export function getRulesComparator(sortingOptions: SortingOptions) {
  return (ruleA: Rule, ruleB: Rule): number => {
    const { field, order } = sortingOptions;
    const direction = order === 'asc' ? 1 : -1;

    switch (field) {
      case 'enabled': {
        const a = get(ruleA, field);
        const b = get(ruleB, field);

        return compareNumbers(Number(a), Number(b), direction);
      }
      case 'version':
      case 'risk_score':
      case 'execution_summary.last_execution.metrics.execution_gap_duration_s':
      case 'execution_summary.last_execution.metrics.total_indexing_duration_ms':
      case 'execution_summary.last_execution.metrics.total_search_duration_ms': {
        const a = get(ruleA, field) ?? -Infinity;
        const b = get(ruleB, field) ?? -Infinity;

        return compareNumbers(a, b, direction);
      }
      case 'updated_at':
      case 'created_at':
      case 'execution_summary.last_execution.date': {
        const a = get(ruleA, field);
        const b = get(ruleB, field);

        return compareNumbers(
          a == null ? 0 : new Date(a).getTime(),
          b == null ? 0 : new Date(b).getTime(),
          direction
        );
      }
      case 'execution_summary.last_execution.status':
      case 'severity':
      case 'name': {
        const a = get(ruleA, field);
        const b = get(ruleB, field);
        return (a || '').localeCompare(b || '') * direction;
      }
    }
  };
}

/**
 * A helper to compare two numbers.
 *
 * @param a - first number
 * @param b - second number
 * @param direction - comparison direction +1 for asc or -1 for desc
 * @returns comparison result
 */
const compareNumbers = (a: number, b: number, direction: number) => {
  // We cannot use `return (a - b);` here as it might result in NaN if one of inputs is Infinity.
  if (a > b) {
    return direction;
  } else if (a < b) {
    return -direction;
  }
  return 0;
};

/**
 * Returns a predicate function to be used with .filter()
 *
 * @param filterOptions Current table filter
 */
export function getRulesPredicate(filterOptions: FilterOptions) {
  return (rule: Rule) => {
    if (
      filterOptions.filter &&
      !rule.name.toLowerCase().includes(filterOptions.filter.toLowerCase())
    ) {
      return false;
    }
    if (filterOptions.showCustomRules && rule.immutable) {
      return false;
    }
    if (filterOptions.showElasticRules && !rule.immutable) {
      return false;
    }
    if (filterOptions.tags.length && !filterOptions.tags.every((tag) => rule.tags.includes(tag))) {
      return false;
    }
    return true;
  };
}
