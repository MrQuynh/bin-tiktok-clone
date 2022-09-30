import config from '~/config';

// Layout
import { HeaderOnly } from '~/layouts';

// Page
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Live from '~/pages/Live';
import Watching from '~/pages/Watching';
import Messages from '~/pages/Messages';
import Settings from '~/pages/Settings';
import Coin from '~/pages/Coin';
import Feedback from '~/pages/Feedback/Feedback';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.live, component: Live, size: true },
    { path: config.routes.profile, component: Profile, size: true },
    { path: config.routes.search, component: Search, layout: null },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.messages, component: Messages, layout: HeaderOnly },
    { path: config.routes.settings, component: Settings, layout: HeaderOnly },
    { path: config.routes.feedback, component: Feedback, layout: HeaderOnly },
    { path: config.routes.coin, component: Coin, layout: HeaderOnly },
    { path: config.routes.watching, component: Watching, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
