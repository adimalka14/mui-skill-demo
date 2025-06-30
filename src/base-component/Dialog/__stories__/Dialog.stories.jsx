import React, { useState } from 'react';
import Dialog from '../Dialog';
import Button from '../../Button/Button';
import { useArgs } from 'storybook/preview-api';

export default {
    title: 'base-component/Dialog',
    component: Dialog,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    // argTypes: {
    //     open: { control: 'boolean' },
    //     title: { control: 'text' },
    //     fullWidth: { control: 'boolean' },
    //     maxWidth: {
    //         control: 'select',
    //         options: [false, 'xs', 'sm', 'md', 'lg', 'xl'],
    //     },
    //     fullScreen: {
    //         control: 'select',
    //         options: [false, true, 'xs', 'sm', 'md', 'lg', 'xl'],
    //     },
    //     draggable: { control: 'boolean' },
    //     dividers: { control: 'boolean' },
    //     autoContentPadding: { control: 'boolean' },
    // },
    args: {
        title: 'Demo Dialog',
        children: 'This is a dialog content area.',
        fullWidth: true,
        maxWidth: 'sm',
        fullScreen: false,
        draggable: false,
        dividers: false,
        autoContentPadding: true,
    },
};

const Template = (args) => {
    //const [{ open, ...args }, updateArgs] = useArgs();
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    //const handleClose = () => updateArgs({ open: false });

    return (
        <>
            <Button onClick={() => setOpen(true)}>Open Dialog</Button>
            <Dialog {...args} open={open} onClose={handleClose} />
        </>
    );
};

export const Default = Template.bind({});
Default.storyName = '📦 Default Dialog';

export const WithActions = Template.bind({});
WithActions.args = {
    title: 'Dialog With Actions',
    children: 'Are you sure you want to continue?',
    actions: [
        {
            label: 'Cancel',
            onClick: () => alert('Cancelled'),
        },
        {
            label: 'Confirm',
            onClick: () => alert('Confirmed'),
            autoFocus: true,
            variant: 'contained',
        },
    ],
};
WithActions.storyName = '✅ With Actions';

export const DraggableDialog = Template.bind({});
DraggableDialog.args = {
    draggable: true,
    title: 'Draggable Dialog',
    children: 'Try dragging this dialog by its title.',
};
DraggableDialog.storyName = '🖱️ Draggable Dialog';

export const FullScreenResponsive = Template.bind({});
FullScreenResponsive.args = {
    fullScreen: 'sm',
    title: 'Responsive Fullscreen Dialog',
    children: 'Will become fullscreen on small screens.',
};
FullScreenResponsive.storyName = '📱 Responsive FullScreen';

export const WithDividers = Template.bind({});
WithDividers.args = {
    dividers: true,
    title: 'Dialog With Dividers',
    children: `Longer text to show how dividers split the content.
Line one.
Line two.
Line three.`,
};
WithDividers.storyName = '📏 With Dividers';
