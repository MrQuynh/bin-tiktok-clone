import React from 'react';
import { IntlProvider } from 'react-intl';

import '@formatjs/intl-pluralrules/polyfill';
import '@formatjs/intl-pluralrules/locale-data/en';
import '@formatjs/intl-pluralrules/locale-data/vi';

import '@formatjs/intl-relativetimeformat/polyfill';
import '@formatjs/intl-relativetimeformat/locale-data/en';
import '@formatjs/intl-relativetimeformat/locale-data/vi';

import LanguageUtils from '~/utils/LanguageUtils';
import { useStore } from '~/hooks';
function IntlProviderWrapper({ children }) {
    const messages = LanguageUtils.getFlattenedMessages();
    const [state, dispatch] = useStore();
    return (
        <IntlProvider locale={state.language} messages={messages[state.language]} defaultLocale="vi">
            {children}
        </IntlProvider>
    );
}

export default IntlProviderWrapper;
