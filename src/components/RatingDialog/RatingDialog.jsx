import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Avatar, Dialog, Rating, TextField } from '../../base-component';
import { useTranslation } from 'react-i18next';

export default function RatingDialog({ open, onClose }) {
    const { t } = useTranslation();
    const [rate, setRate] = useState(undefined);
    const [feedback, setFeedback] = useState('');

    const lowRate = rate <= 2;
    const error = !feedback && lowRate;

    return (
        <>
            <Dialog
                title={
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                        }}
                    >
                        <Avatar />
                        <p>{t('ASK_FOR_RATING')}</p>
                    </div>
                }
                open={open}
                dividers
                onClose={() =>
                    onClose({ rate: undefined, feedback: undefined })
                }
                actions={[
                    {
                        label: t('CANCEL'),
                        onClick: () =>
                            onClose({ rate: undefined, feedback: undefined }),
                    },
                    {
                        label: t('SUBMIT'),
                        onClick: () => {
                            if (error) return;

                            onClose({ rate, feedback });
                        },
                        autoFocus: true,
                        variant: 'contained',
                    },
                ]}
            >
                <div
                    style={{
                        display: 'flex',
                        gap: '1rem',
                        flexDirection: 'column',
                    }}
                >
                    <Rating
                        value={rate}
                        onChange={(event, newValue) => setRate(newValue)}
                    />
                    {rate !== undefined && (
                        <TextField
                            id={'feedback'}
                            label={t('FEEDBACK')}
                            value={feedback}
                            required={lowRate}
                            onChange={(e) => setFeedback(e.target.value)}
                            multiline
                            rows={4}
                            error={error}
                            helperText={
                                error ? t('PLEASE_PROVIDE_FEEDBACK') : ''
                            }
                        />
                    )}
                </div>
            </Dialog>
        </>
    );
}

RatingDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func,
};
