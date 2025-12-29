import AdminPage from '@/layouts/admin-page-layout';

export default function Tutorials() {
    return (
        <AdminPage 
            title="Tutorials" 
            description="View system tutorials"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Tutorials', href: '/admin/tutorials' }
            ]}
        >
            <p className="text-muted-foreground">Tutorial videos and guides will be displayed here</p>
        </AdminPage>
    );
}
