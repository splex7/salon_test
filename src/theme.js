import { createMuiTheme } from '@material-ui/core/styles';

const themeBase = createMuiTheme({
    typography: {
        fontFamily: [ 'Helvetica Neue', 'Arial', 'sans-serif'].join(','),
    },
    spacing: 0,
    palette: {
        secondary: {
            light: '#5f5fc4',
            main: '#283593',
            dark: '#001064',
            contrastText: '#fff',
        },
        error: {
            light: '#d56363',
            main: '#e57373',
            dark: '#f44336',
        }
    },
    overrides: {
        MuiAppBar: {
            colorPrimary: {
                backgroundColor: 'rgba(0, 0, 0, 1)'
            },
            colorSecondary: {
                backgroundColor: 'rgba(0, 0, 0, 1)'
            },
        },
        RaAppBar: {
            title: {
                fontSize: '1rem'
            },
            menuButton: {
                marginLeft: '.2em',
                marginRight: '.14em',
            }
        },
        RaMenuItemLink: {
            root: {
                fontWeight: '400',
                minHeight: '32px',
                color: 'rgba(0, 0, 0, 1)',
                fontSize: '.94rem',
            },
            active: {
                fontWeight: '600',
            }
        },
        PrivateTabIndicator: {
            colorSecondary: {
                backgroundColor: 'rgba(255, 255, 255, 1)'
            }
        },
        MuiFilledInput: {
            root: {
                backgroundColor: 'rgba(255, 255, 255, 1)',
                '&$disabled': {
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                },
                '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.03)',
                },
                '&:focus': {
                    backgroundColor: 'rgba(0, 0, 0, 0.03)',
                }
            },
        },
        MuiButton: {
            containedPrimary: {
                backgroundColor: 'rgba(40, 40, 40, 1)',
                '&:hover': {
                    backgroundColor: 'rgba(120, 120, 120, 1)',
                }
            },
            textPrimary: {
                color: 'rgba(40, 40, 40, 1)'
            }
        },
        MuiPaper: {
            root: {
                backgroundColor: 'rgba(255, 255, 255, 1)'
            }
        },
        RaToolbar: {
            toolbar: {
                backgroundColor: 'rgba(255, 255, 255, 1)'
            }
        },
        MuiRadio: {
            root: {
                position: 'relative',
                left: '1.75em',
                top: '-3.4em',
            }
        },
        MuiCardHeader: {
            root: {
                marginLeft: '1.5em'
            }
        },
        MuiFormGroup: {
            root: {
                marginTop: '1em'
            }
        },
    },
});

export const lightTheme = {
    ...themeBase
};

export default lightTheme;
