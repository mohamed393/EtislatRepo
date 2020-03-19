import {EtrainingNavigation} from '@etraining/types';

export const navigation: EtrainingNavigation[] = [
    {
        id: 'applications',
        title: 'Applications',
        translate: 'NAV.APPLICATIONS',
        type: 'group',
        children: [
            {
                id: 'sample',
                title: 'Sample',
                translate: 'NAV.SAMPLE.TITLE',
                type: 'item',
                icon: 'email',
                url: '/sample',
                badge: {
                    title: '25',
                    translate: 'NAV.SAMPLE.BADGE',
                    bg: '#F44336',
                    fg: '#FFFFFF'
                }
            },
            {
                id: 'authentication',
                title: 'Authentication',
                type: 'collapsable',
                icon: 'lock',
                badge: {
                    title: '10',
                    bg: '#525e8a',
                    fg: '#FFFFFF'
                },
                children: [
                    {
                        id: 'login',
                        title: 'Login',
                        type: 'item',
                        url: '/auth/login'
                    },
                    {
                        id: 'register',
                        title: 'Register',
                        type: 'item',
                        url: '/auth/register'
                    },

                    {
                        id: 'forgot-password',
                        title: 'Forgot Password',
                        type: 'item',
                        url: '/auth/forgot-password'
                    },

                    {
                        id: 'reset-password',
                        title: 'Reset Password',
                        type: 'item',
                        url: '/auth/reset-password'
                    },

                    {
                        id: 'lock-screen',
                        title: 'Lock Screen',
                        type: 'item',
                        url: '/auth/lock'
                    },
                    {
                        id: 'mail-confirmation',
                        title: 'Mail Confirmation',
                        type: 'item',
                        url: '/auth/mail-confirm'
                    }
                ]
            },
        ]
    }
];
