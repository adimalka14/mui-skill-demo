import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box as MuiBox, Rating as MuiRating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { useTranslation } from 'react-i18next';

const RATINGS = {
    0.5: 'USELESS',
    1: 'USELESS+',
    1.5: 'POOR',
    2: 'POOR+',
    2.5: 'OK',
    3: 'OK+',
    3.5: 'GOOD',
    4: 'GOOD+',
    4.5: 'EXCELLENT',
    5: 'EXCELLENT+',
};

const TEXT_SIZE = {
    small: 16,
    medium: 20,
    large: 24,
};

function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${RATINGS[value]}`;
}

export default function Rating({
    value = 0,
    precision = 0.5,
    onChange,
    disabled = false,
    showLabel = true,
    size = 'medium',
}) {
    const [hover, setHover] = useState(-1);
    const { t } = useTranslation();

    let labelKey = RATINGS[hover !== -1 ? hover : value];
    let label = labelKey ? t(`RATINGS.${labelKey}`) : '';

    if (precision === 1) {
        label = label?.replace('+', '');
    }

    return (
        <MuiBox
            sx={{
                width: 200,
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <MuiRating
                name="hover-feedback"
                value={value}
                precision={precision}
                onChange={onChange}
                disabled={disabled}
                getLabelText={getLabelText}
                onChangeActive={(event, newHover) => {
                    setHover(newHover);
                }}
                size={size}
                emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
            />
            {showLabel && value !== null && (
                <MuiBox
                    sx={{
                        ml: 2,
                        fontSize: TEXT_SIZE[size],
                        textWrap: 'nowrap',
                    }}
                >
                    {label}
                </MuiBox>
            )}
        </MuiBox>
    );
}

Rating.propTypes = {
    value: PropTypes.number,
    precision: PropTypes.oneOf([0.5, 1]),
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    showLabel: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
};
