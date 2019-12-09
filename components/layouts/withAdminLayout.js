import AdminHeader from './../shared/admins/AdminHeader';

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
};

const withAdminLayout = Page => {
    return () => (
        <div style={layoutStyle}>
            <AdminHeader />
            <Page />
        </div>
    )
}

export default withAdminLayout;