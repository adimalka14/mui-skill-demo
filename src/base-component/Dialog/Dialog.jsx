import React, { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import {
    Dialog as MuiDialog,
    DialogTitle as MuiDialogTitle,
    DialogContent as MuiDialogContent,
    DialogActions as MuiDialogActions,
    DialogContentText as MuiDialogContentText,
    Slide as MuiSlide,
    Paper as MuiPaper,
    useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { DndContext, useDraggable } from '@dnd-kit/core';

import Button from '../Button/Button';

const Transition = forwardRef(function Transition({ children, ...props }, ref) {
    return (
        <MuiSlide direction="up" ref={ref} {...props}>
            {children}
        </MuiSlide>
    );
});

function PaperComponent({ id, children, ...props }) {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleDragEnd = (event) => {
        const { delta } = event;
        if (delta) {
            setPosition((prev) => {
                return {
                    x: prev.x + delta.x,
                    y: prev.y + delta.y,
                };
            });
        }
    };

    return (
        <DndContext onDragEnd={handleDragEnd}>
            <DraggablePaper id={id} position={position} {...props}>
                {children}
            </DraggablePaper>
        </DndContext>
    );
}

function DraggablePaper({ id, position, children, ...props }) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id,
    });

    let x = position.x + (transform?.x || 0);
    let y = position.y + (transform?.y || 0);

    const style = {
        transform: `translate3d(${x}px, ${y}px, 0)`,
        cursor: 'move',
    };

    return (
        <div
            id={id}
            ref={setNodeRef}
            style={style}
            {...listeners}
            {...attributes}
        >
            <MuiPaper {...props}>{children}</MuiPaper>
        </div>
    );
}

function Dialog({
    onClose,
    title = '',
    titleId = 'dialog-title',
    dividers = false,
    contentId,
    selectedValue,
    open = false,
    actions = [],
    fullWidth = false,
    maxWidth = false,
    fullScreen = false,
    draggable = false,
    children,
    autoContentPadding = true,
    ...props
}) {
    const theme = useTheme();
    const fullScreenBreakPoint = useMediaQuery(
        theme.breakpoints.down(fullScreen)
    );

    const handleClose = () => onClose?.(selectedValue);

    return (
        <MuiDialog
            sx={{ backgroundColor: 'background.dialog' }}
            onClose={handleClose}
            open={open}
            TransitionComponent={Transition}
            keepMounted
            scroll="paper"
            fullWidth={fullWidth}
            maxWidth={maxWidth}
            aria-labelledby={titleId}
            aria-describedby={contentId}
            PaperComponent={
                draggable
                    ? (props) => <PaperComponent id={titleId} {...props} />
                    : undefined
            }
            fullScreen={
                typeof fullScreen === 'boolean'
                    ? fullScreen
                    : fullScreenBreakPoint
            }
            {...props}
        >
            {title && (
                <MuiDialogTitle
                    style={{ ...(draggable && { cursor: 'move' }) }}
                    id={titleId}
                >
                    {title}
                </MuiDialogTitle>
            )}

            <MuiDialogContent
                sx={{ ...(!autoContentPadding && { padding: 0 }) }}
                dividers={dividers}
            >
                {typeof children === 'string' ? (
                    <MuiDialogContentText id={contentId}>
                        {children}
                    </MuiDialogContentText>
                ) : (
                    children
                )}
            </MuiDialogContent>

            {actions?.length ? (
                <MuiDialogActions>
                    {actions.map((action, index) => (
                        <Button
                            key={index}
                            {...action}
                            onClick={action.onClick}
                            autoFocus={action.autoFocus}
                            variant={action.variant ?? 'text'}
                        >
                            {action.label}
                        </Button>
                    ))}
                </MuiDialogActions>
            ) : null}
        </MuiDialog>
    );
}

Dialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func,
    selectedValue: PropTypes.string,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    titleId: PropTypes.string,
    contentId: PropTypes.string,
    fullWidth: PropTypes.bool,
    dividers: PropTypes.bool,
    autoContentPadding: PropTypes.bool,
    draggable: PropTypes.bool,
    maxWidth: PropTypes.oneOf([false, 'xs', 'sm', 'md', 'lg', 'xl']),
    fullScreen: PropTypes.oneOf([false, true, 'xs', 'sm', 'md', 'lg', 'xl']),
    actions: PropTypes.arrayOf(
        PropTypes.shape({
            onClick: PropTypes.func,
            label: PropTypes.string,
            autoFocus: PropTypes.bool,
            variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
        })
    ),
};

export const DialogContentText = MuiDialogContentText;
export default Dialog;
