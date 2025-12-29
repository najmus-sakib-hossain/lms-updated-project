import AdminPage from '@/layouts/admin-page-layout';

export default function IPListing() {
    return (
        <AdminPage 
            title="IP Listing" 
            description="Manage IP address whitelist"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Settings', href: '/admin/settings/ip-listing' },
                { title: 'IP Listing', href: '/admin/settings/ip-listing' }
            ]}
        >
            <p className="text-muted-foreground">IP listing management will be displayed here</p>
        </AdminPage>
    );
}
