import React from 'react';
import { AppBar as MuiAppBar, Box, Toolbar, Typography } from '@mui/material';
import {
    Translate as TranslateIcon,
    Brightness4 as Brightness4Icon,
    Contrast as ContrastIcon,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

import { useThemeContext } from '../../themes/Provider';
import { MenuBarButton } from '../MenuBarButton/MenuBarButton';


export default function AppBar() {
    const { t, i18n } = useTranslation();
    const { theme, handleSetDir, handleSetTheme } = useThemeContext();

    return (
        <Box sx={{ width: '100%' }}>
            <MuiAppBar position="fixed">
                <Toolbar variant={'dense'}>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, textAlign: 'start' }}
                    >
                        MUI
                    </Typography>

                    <MenuBarButton
                        icon={<TranslateIcon />}
                        menuItems={[
                            {
                                label: 'English',
                                onClick: () => {
                                    i18n.changeLanguage('en').then(() => {
                                        handleSetDir(t('SETTINGS.DIRECTION'));
                                    });
                                },
                            },
                            {
                                label: 'עברית',
                                onClick: () => {
                                    i18n.changeLanguage('he').then(() => {
                                        handleSetDir(t('SETTINGS.DIRECTION'));
                                    });
                                },
                            },
                        ]}
                    />

                    <MenuBarButton
                        icon={
                            theme === 'dark' ? (
                                <ContrastIcon />
                            ) : (
                                <Brightness4Icon />
                            )
                        }
                        menuItems={[
                            {
                                label: <Brightness4Icon />,
                                onClick: () => handleSetTheme('light'),
                                tooltip: 'Light',
                            },
                            {
                                label: <ContrastIcon />,
                                onClick: () => handleSetTheme('dark'),
                                tooltip: 'Dark',
                            },
                        ]}
                    />
                </Toolbar>
            </MuiAppBar>
        </Box>
    );
}
