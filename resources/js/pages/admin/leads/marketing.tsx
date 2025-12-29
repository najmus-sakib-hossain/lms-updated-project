import AdminPage from '@/layouts/admin-page-layout';

export default function MarketingList() {
    return (
        <AdminPage 
            title="Show Marketing List" 
            description="View marketing leads"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Leads', href: '/admin/leads/frontdesk' },
                { title: 'Marketing', href: '/admin/leads/marketing' }
            ]}
        >
            <p className="text-muted-foreground">Marketing leads list will be displayed here</p>
        </AdminPage>
    );
}
