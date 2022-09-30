import PropTypes from 'prop-types';
import { memo } from 'react';
function Menu({ children }) {
    return <nav>{children}</nav>;
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
};

export default memo(Menu);
