/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import {
  ANALYSER_GRAPH_TEST_ID,
  SESSION_VIEW_TEST_ID,
} from '../../public/flyout/alerts/panels/left/components/test_ids';
import {
  HISTORY_TAB_CONTENT_TEST_ID,
  INSIGHTS_TAB_CONTENT_TEST_ID,
  INVESTIGATIONS_TAB_CONTENT_TEST_ID,
  VISUALIZE_TAB_BUTTON_GROUP_TEST_ID,
  VISUALIZE_TAB_GRAPH_ANALYSER_BUTTON_TEST_ID,
  VISUALIZE_TAB_SESSION_VIEW_BUTTON_TEST_ID,
} from '../../public/flyout/alerts/panels/left/tabs/test_ids';
import {
  HISTORY_TAB_TEST_ID,
  INSIGHTS_TAB_TEST_ID,
  INVESTIGATIONS_TAB_TEST_ID,
  VISUALIZE_TAB_TEST_ID,
} from '../../public/flyout/alerts/panels/left/test_ids';
import {
  COLLAPSE_DETAILS_BUTTON,
  EXPAND_DETAILS_BUTTON,
} from '../../public/flyout/alerts/panels/right/components/translations';
import {
  FLYOUT_BODY_TEST_ID,
  JSON_TAB_TEST_ID,
  OVERVIEW_TAB_TEST_ID,
  TABLE_TAB_TEST_ID,
} from '../../public/flyout/alerts/panels/right/test_ids';
import {
  JSON_TAB_CONTENT_TEST_ID,
  OVERVIEW_TAB_CONTENT_TEST_ID,
  TABLE_TAB_CONTENT_TEST_ID,
} from '../../public/flyout/alerts/panels/right/tabs/test_ids';
import { FLYOUT_HEADER_TITLE_TEST_ID } from '../../public/flyout/alerts/panels/right/components/test_ids';

/* Right section */

export const ALERT_DETAILS_FLYOUT_BODY = `[data-test-subj="${FLYOUT_BODY_TEST_ID}"]`;
export const ALERT_DETAILS_FLYOUT_BODY_OVERFLOW = `.euiFlyoutBody__overflow`;
export const ALERT_DETAILS_FLYOUT_HEADER_TITLE = `[data-test-subj="${FLYOUT_HEADER_TITLE_TEST_ID}"]`;
export const ALERT_DETAILS_FLYOUT_EXPAND_DETAILS_BUTTON = `[data-test-subj="${EXPAND_DETAILS_BUTTON}"]`;
export const ALERT_DETAILS_FLYOUT_COLLAPSE_DETAILS_BUTTON = `[data-test-subj="${COLLAPSE_DETAILS_BUTTON}"]`;
export const ALERT_DETAILS_FLYOUT_OVERVIEW_TAB = `[data-test-subj="${OVERVIEW_TAB_TEST_ID}"]`;
export const ALERT_DETAILS_FLYOUT_TABLE_TAB = `[data-test-subj="${TABLE_TAB_TEST_ID}"]`;
export const ALERT_DETAILS_FLYOUT_JSON_TAB = `[data-test-subj="${JSON_TAB_TEST_ID}"]`;
export const ALERT_DETAILS_FLYOUT_OVERVIEW_TAB_CONTENT = `[data-test-subj="${OVERVIEW_TAB_CONTENT_TEST_ID}"]`;
export const ALERT_DETAILS_FLYOUT_TABLE_TAB_CONTENT = `[data-test-subj="${TABLE_TAB_CONTENT_TEST_ID}"]`;
export const ALERT_DETAILS_FLYOUT_JSON_TAB_CONTENT = `[data-test-subj="${JSON_TAB_CONTENT_TEST_ID}"]`;

/* Left section */

export const ALERT_DETAILS_FLYOUT_VISUALIZE_TAB = `[data-test-subj="${VISUALIZE_TAB_TEST_ID}"]`;
export const ALERT_DETAILS_FLYOUT_INSIGHTS_TAB = `[data-test-subj="${INSIGHTS_TAB_TEST_ID}"]`;
export const ALERT_DETAILS_FLYOUT_INVESTIGATIONS_TAB = `[data-test-subj="${INVESTIGATIONS_TAB_TEST_ID}"]`;
export const ALERT_DETAILS_FLYOUT_HISTORY_TAB = `[data-test-subj="${HISTORY_TAB_TEST_ID}"]`;
export const ALERT_DETAILS_FLYOUT_VISUALIZE_TAB_BUTTON_GROUP = `[data-test-subj="${VISUALIZE_TAB_BUTTON_GROUP_TEST_ID}"]`;
export const ALERT_DETAILS_FLYOUT_VISUALIZE_TAB_SESSION_VIEW_BUTTON = `[data-test-subj="${VISUALIZE_TAB_SESSION_VIEW_BUTTON_TEST_ID}"]`;
export const ALERT_DETAILS_FLYOUT_VISUALIZE_TAB_SESSION_VIEW_CONTENT = `[data-test-subj="${SESSION_VIEW_TEST_ID}"]`;
export const ALERT_DETAILS_FLYOUT_VISUALIZE_TAB_GRAPH_ANALYSER_BUTTON = `[data-test-subj="${VISUALIZE_TAB_GRAPH_ANALYSER_BUTTON_TEST_ID}"]`;
export const ALERT_DETAILS_FLYOUT_VISUALIZE_TAB_GRAPH_ANALYSER_CONTENT = `[data-test-subj="${ANALYSER_GRAPH_TEST_ID}"]`;
export const ALERT_DETAILS_FLYOUT_INSIGHTS_TAB_CONTENT = `[data-test-subj="${INSIGHTS_TAB_CONTENT_TEST_ID}"]`;
export const ALERT_DETAILS_FLYOUT_INVESTIGATIONS_TAB_CONTENT = `[data-test-subj="${INVESTIGATIONS_TAB_CONTENT_TEST_ID}"]`;
export const ALERT_DETAILS_FLYOUT_HISTORY_TAB_CONTENT = `[data-test-subj="${HISTORY_TAB_CONTENT_TEST_ID}"]`;

/* Table tab */

export const ALERT_DETAILS_FLYOUT_TABLE_TAB_FILTER = `.euiFieldSearch`;
export const ALERT_DETAILS_FLYOUT_TABLE_TAB_CLEAR_FILTER = `[data-test-subj="clearSearchButton"]`;
export const ALERT_DETAILS_FLYOUT_TABLE_TAB_TIMESTAMP_ROW = `[data-test-subj="event-fields-table-row-@timestamp"]`;
export const ALERT_DETAILS_FLYOUT_TABLE_TAB_ID_ROW = `[data-test-subj="event-fields-table-row-_id"]`;
export const ALERT_DETAILS_FLYOUT_TABLE_TAB_EVENT_TYPE_ROW = `[data-test-subj="event-fields-table-row-event.type"]`;
export const ALERT_DETAILS_FLYOUT_TABLE_TAB_ROW_CELL_FILTER_IN = `[data-test-subj="actionItem-security-detailsFlyout-cellActions-filterIn"]`;
export const ALERT_DETAILS_FLYOUT_TABLE_TAB_ROW_CELL_FILTER_OUT = `[data-test-subj="actionItem-security-detailsFlyout-cellActions-filterOut"]`;
export const ALERT_DETAILS_FLYOUT_TABLE_TAB_ROW_CELL_MORE_ACTIONS = `[data-test-subj="showExtraActionsButton"]`;
export const ALERT_DETAILS_FLYOUT_TABLE_TAB_ROW_CELL_ADD_TO_TIMELINE = `[data-test-subj="actionItem-security-detailsFlyout-cellActions-addToTimeline"]`;
export const ALERT_DETAILS_FLYOUT_TABLE_TAB_ROW_CELL_COPY_TO_CLIPBOARD = `[data-test-subj="actionItem-security-detailsFlyout-cellActions-copyToClipboard"]`;
