import { css } from 'lit';

export default css`
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--information {
    background-color: var(--surf-color-information-100);
  }

  .alert--information .alert__icon {
    color: var(--surf-color-information-300);
  }

  .alert--success {
    background-color: var(--surf-color-success-100);
  }

  .alert--success .alert__icon {
    color: var(--surf-color-success-300);
  }

  .alert--neutral {
    background-color: var(--surf-color-gray-100);
  }

  .alert--neutral .alert__icon {
    color: var(--surf-color-gray-500);
  }

  .alert--warning {
    background-color: var(--surf-color-warning-100);
  }

  .alert--warning .alert__icon {
    color: var(--surf-color-warning-300);
  }

  .alert--danger {
    background-color: var(--surf-color-danger-100);
  }

  .alert--danger .alert__icon {
    color: var(--surf-color-danger-300);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    padding-inline-end: var(--sl-spacing-medium);
  }
`;
