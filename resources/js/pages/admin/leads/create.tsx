import AdminPage from '@/layouts/admin-page-layout';

export default function CreateLeads() {
    return (
        <AdminPage 
            title="Create Leads" 
            description="Add new leads"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Leads', href: '/admin/leads/frontdesk' },
                { title: 'Create', href: '/admin/leads/create' }
            ]}
        >
            <p className="text-muted-foreground">Leads creation form will be displayed here</p>
        </AdminPage>
    );
}
