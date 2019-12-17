import React, { Fragment } from 'react';

import AdminTemplate from './AdminTemplate';
import DefaultTemplate from './DefaultTemplate';


const initProps = {
    isAdmin: false
};

const withLayout = (Page, props = initProps) => () => {
    const { isAdmin } = props;

    const renderTemplate = isAdmin => {
        return isAdmin ? <AdminTemplate page={Page} /> : <DefaultTemplate page={Page} />
    }

    return (
        <Fragment>
            {renderTemplate(isAdmin)}
        </Fragment>
    )
};

export default withLayout;
