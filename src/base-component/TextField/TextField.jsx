import React from 'react';
import PropTypes from 'prop-types';

import {
    TextField as MuiTextField,
    MenuItem as MuiMenuItem,
    InputAdornment as MuiInputAdornment,
} from '@mui/material';

import { TEXT_FIELD_TYPES } from './TextField.constants';

export default function TextField({
    id,
    type = 'text',
    value = '',
    label = '',
    placeholder = '',
    variant = 'outlined',
    fullWidth = true,
    error = false,
    helperText = '',
    disabled = false,
    readOnly = false,
    required = false,
    size = 'medium',
    select = false,
    multiline = false,
    options = [],
    onChange,
    startCmp,
    endCmp,
    ...props
}) {
    return (
        <MuiTextField
            {...props}
            id={id}
            type={type}
            value={value}
            label={label}
            placeholder={placeholder}
            variant={variant}
            fullWidth={fullWidth}
            error={error}
            helperText={helperText}
            disabled={disabled}
            required={required}
            size={size}
            select={select}
            multiline={multiline}
            onChange={onChange}
            InputProps={{
                readOnly: readOnly,
                ...(startCmp && {
                    startAdornment: (
                        <MuiInputAdornment position="start">
                            {startCmp}
                        </MuiInputAdornment>
                    ),
                }),
                ...(endCmp && {
                    endAdornment: (
                        <MuiInputAdornment position="end">
                            {endCmp}
                        </MuiInputAdornment>
                    ),
                }),
            }}
        >
            {select &&
                options.map((option) => (
                    <MuiMenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MuiMenuItem>
                ))}
        </MuiTextField>
    );
}

TextField.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.oneOf(TEXT_FIELD_TYPES),
    value: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    variant: PropTypes.oneOf(['outlined', 'filled', 'standard']),
    fullWidth: PropTypes.bool,
    error: PropTypes.bool,
    helperText: PropTypes.string,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    required: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium']),
    select: PropTypes.bool,
    multiline: PropTypes.bool,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string,
            label: PropTypes.string,
        })
    ),
    onChange: PropTypes.func,
    startCmp: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    endCmp: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};
