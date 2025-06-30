import { fn } from 'storybook/test';

import Avatar from '../Avatar.jsx';
import PageviewIcon from '@mui/icons-material/Pageview';

export default {
    title: 'base-component/Avatar',
    component: Avatar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        src: {
            control: 'text',
        },
        alt: {
            control: 'text',
        },
        variant: {
            control: 'radio',
            options: ['circular', 'rounded', 'square'],
        },
        size: {
            control: {
                type: 'number',
                min: 20,
                max: 200,
                step: 20,
            },
        },
        bgcolor: {
            control: 'color',
        },
        children: {
            control: 'text',
        },
    },
    args: {},
};

export const Default = {};

export const WithImage = {
    args: {
        src: './src/assets/avatar.jpeg',
        alt: 'Avatar',
    },
};

export const WithColor = {
    args: {
        bgcolor: '#00c4ff',
    },
};

export const WithTextChildren = {
    args: {
        children: 'AM',
    },
};

export const WithIconChildren = {
    args: {
        children: <PageviewIcon />,
    },
    argTypes: {
        children: {
            control: false,
        },
    },
};

export const Rounded = {
    args: {
        variant: 'rounded',
    },
};

export const Square = {
    args: {
        variant: 'square',
    },
};

export const Circular = {
    args: {
        variant: 'circular',
    },
};
