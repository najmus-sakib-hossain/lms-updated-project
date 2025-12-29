import AdminPage from '@/layouts/admin-page-layout';

export default function FrontdeskList() {
    return (
        <AdminPage 
            title="Show FrontDesk List" 
            description="View frontdesk leads"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Leads', href: '/admin/leads/frontdesk' },
                { title: 'FrontDesk', href: '/admin/leads/frontdesk' }
            ]}
        >
            <p className="text-muted-foreground">FrontDesk leads list will be displayed here</p>
        </AdminPage>
    );
}
