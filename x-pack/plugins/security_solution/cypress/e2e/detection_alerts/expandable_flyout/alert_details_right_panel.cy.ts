/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import {
  ALERT_DETAILS_FLYOUT_COLLAPSE_DETAILS_BUTTON,
  ALERT_DETAILS_FLYOUT_EXPAND_DETAILS_BUTTON,
  ALERT_DETAILS_FLYOUT_HEADER_TITLE,
  ALERT_DETAILS_FLYOUT_JSON_TAB,
  ALERT_DETAILS_FLYOUT_JSON_TAB_CONTENT,
  ALERT_DETAILS_FLYOUT_OVERVIEW_TAB,
  ALERT_DETAILS_FLYOUT_OVERVIEW_TAB_CONTENT,
  ALERT_DETAILS_FLYOUT_TABLE_TAB,
  ALERT_DETAILS_FLYOUT_TABLE_TAB_CONTENT,
  ALERT_DETAILS_FLYOUT_TABLE_TAB_EVENT_TYPE_ROW,
} from '../../../screens/alert_details_expandable_flyout';
import {
  collapseAlertDetailsExpandableFlyoutLeftSection,
  expandAlertDetailsExpandableFlyoutLeftSection,
  expandFirstAlertExpandableFlyout,
  openJsonTab,
  openOverviewTab,
  openTableTab,
  scrollWithinAlertDetailsExpandableFlyoutRightSection,
} from '../../../tasks/alert_details_expandable_flyout';
import { cleanKibana } from '../../../tasks/common';
import { login, visit } from '../../../tasks/login';
import { createCustomRuleEnabled } from '../../../tasks/api_calls/rules';
import { getNewRule } from '../../../objects/rule';
import { ALERTS_URL } from '../../../urls/navigation';
import { waitForAlertsToPopulate } from '../../../tasks/create_new_rule';

// Skipping these for now as the feature is protected behind a feature flag set to false by default
// To run the tests locally, add 'securityFlyoutEnabled' in the Cypress config.ts here https://github.com/elastic/kibana/blob/main/x-pack/test/security_solution_cypress/config.ts#L50
describe.skip('Alert details expandable flyout right panel', { testIsolation: false }, () => {
  before(() => {
    cleanKibana();
    login();
    createCustomRuleEnabled(getNewRule());
    visit(ALERTS_URL);
    waitForAlertsToPopulate();
    expandFirstAlertExpandableFlyout();
  });

  it('should display title in the header', () => {
    cy.get(ALERT_DETAILS_FLYOUT_HEADER_TITLE)
      .should('be.visible')
      .and('have.text', 'Alert details');
  });

  it('should toggle expand detail button in the header', () => {
    expandAlertDetailsExpandableFlyoutLeftSection();
    cy.get(ALERT_DETAILS_FLYOUT_COLLAPSE_DETAILS_BUTTON)
      .should('be.visible')
      .and('have.text', 'Collapse alert details');

    collapseAlertDetailsExpandableFlyoutLeftSection();
    cy.get(ALERT_DETAILS_FLYOUT_EXPAND_DETAILS_BUTTON)
      .should('be.visible')
      .and('have.text', 'Expand alert details');
  });

  it('should display 3 tabs in the right section', () => {
    cy.get(ALERT_DETAILS_FLYOUT_OVERVIEW_TAB).should('be.visible').and('have.text', 'Overview');
    cy.get(ALERT_DETAILS_FLYOUT_TABLE_TAB).should('be.visible').and('have.text', 'Table');
    cy.get(ALERT_DETAILS_FLYOUT_JSON_TAB).should('be.visible').and('have.text', 'JSON');
  });

  it('should display tab content when switching tabs in the right section', () => {
    openOverviewTab();
    cy.get(ALERT_DETAILS_FLYOUT_OVERVIEW_TAB_CONTENT).should('be.visible');

    openTableTab();
    // the table component is rendered within a dom element with overflow, so Cypress isn't finding it
    // this next line is a hack that scrolls to a specific element in the table
    // (in the middle of it vertically) to ensure Cypress finds it
    cy.get(ALERT_DETAILS_FLYOUT_TABLE_TAB_EVENT_TYPE_ROW).scrollIntoView();
    cy.get(ALERT_DETAILS_FLYOUT_TABLE_TAB_CONTENT).should('be.visible');

    openJsonTab();
    // the json component is rendered within a dom element with overflow, so Cypress isn't finding it
    // this next line is a hack that scrolls to the middle of it (vertically) to ensure Cypress finds it
    scrollWithinAlertDetailsExpandableFlyoutRightSection(0, 4500);
    cy.get(ALERT_DETAILS_FLYOUT_JSON_TAB_CONTENT).should('be.visible');
  });
});
