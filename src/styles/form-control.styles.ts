import { css } from 'lit';

export default css`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
    font-weight: var(--surf-input-label-font-weight);
  }

  .form-control--has-label.form-control--small .form-control__label,
  .form-control--has-label.form-control--medium .form-control__label,
  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--surf-input-label-font-size);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }

  /* Invalid */
  sl-input[data-user-invalid]::part(base),
  sl-select[data-user-invalid]::part(combobox),
  sl-checkbox[data-user-invalid]::part(control) {
    border-color: var(--surf-input-border-color-invalid);
  }

  [data-user-invalid]::part(form-control-label),
  [data-user-invalid]::part(form-control-help-text),
  sl-checkbox[data-user-invalid]::part(label) {
    color: var(--surf-input-border-color-invalid);
  }
`;
