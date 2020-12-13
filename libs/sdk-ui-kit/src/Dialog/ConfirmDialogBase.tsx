// (C) 2020 GoodData Corporation
import React from "react";
import cx from "classnames";
import noop from "lodash/noop";
import { Button } from "../Button";
import { DialogBase } from "./DialogBase";
import { IConfirmDialogBaseProps } from "./typings";
import { Bubble, BubbleHoverTrigger } from "../Bubble";

/**
 * @internal
 */
export class ConfirmDialogBase extends DialogBase<IConfirmDialogBaseProps> {
    static defaultProps: Partial<IConfirmDialogBaseProps> = {
        displayCloseButton: true,
        onCancel: noop,
        onSubmit: noop,
        isSubmitDisabled: false,
    };

    render(): JSX.Element {
        const {
            isPositive,
            displayCloseButton,
            headline,
            warning,
            children,
            cancelButtonText,
            submitButtonText,
            submitButtonTooltipText,
            submitButtonTooltipAlignPoints,
            submitButtonTooltipArrowOffsets,
            isSubmitDisabled,
            onSubmit,
            onCancel,
        } = this.props;
        const dialogClasses = cx(
            {
                "gd-confirm": true,
            },
            this.getDialogClasses(),
        );

        const submitButtonClasses = cx({
            "s-dialog-submit-button": true,
            "gd-button-action": isPositive,
            "gd-button-negative": !isPositive,
        });

        return (
            <div tabIndex={0} onKeyDown={this.onKeyDown}>
                <div className={dialogClasses}>
                    {displayCloseButton && this.renderCloseButton()}

                    <div className="gd-dialog-header">
                        <h3>{headline}</h3>
                    </div>

                    {!!warning && <div className="gd-dialog-warning">{warning}</div>}

                    <div className="gd-dialog-content">{children}</div>

                    <div className="gd-dialog-footer">
                        <Button
                            onClick={onCancel}
                            className="gd-button-secondary s-dialog-cancel-button"
                            value={cancelButtonText}
                        />

                        <BubbleHoverTrigger className="gd-button" showDelay={0} hideDelay={0}>
                            <Button
                                onClick={onSubmit}
                                className={submitButtonClasses}
                                value={submitButtonText}
                                disabled={isSubmitDisabled}
                            />
                            {submitButtonTooltipText && (
                                <Bubble
                                    className="bubble-primary"
                                    alignPoints={submitButtonTooltipAlignPoints || [{ align: "bc tc" }]}
                                    arrowOffsets={submitButtonTooltipArrowOffsets || { "bc tc": [0, 15] }}
                                >
                                    {submitButtonTooltipText}
                                </Bubble>
                            )}
                        </BubbleHoverTrigger>
                    </div>
                </div>
            </div>
        );
    }
}
