import React, { useState } from 'react';

import RatingDialog from '../RatingDialog';
import { Button } from '../../../base-component';
import { fn } from 'storybook/test';

export default {
    title: 'component/RatingDialog',
    component: RatingDialog,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
};

export const Template = (args) => {
    const [open, setOpen] = useState(false);
    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button onClick={() => setOpen(true)}>Feedback</Button>
            <RatingDialog
                {...args}
                onClose={fn(onClose)}
                open={open}
            ></RatingDialog>
        </>
    );
};