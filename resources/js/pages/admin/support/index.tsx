import AdminPage from '@/layouts/admin-page-layout';

export default function Support() {
    return (
        <AdminPage 
            title="কমপ্লেইন ও পরামর্শ" 
            description="Submit complaints and suggestions"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Support', href: '/admin/support' }
            ]}
        >
            <p className="text-muted-foreground">Complaints and suggestions form will be displayed here</p>
        </AdminPage>
    );
}
