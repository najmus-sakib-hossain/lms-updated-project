import AdminPage from '@/layouts/admin-page-layout';

export default function CreateSubject() {
    return (
        <AdminPage 
            title="Create Subject" 
            description="Add a new subject"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Academic', href: '/admin/academic/overview' },
                { title: 'Create Subject', href: '/admin/academic/subjects/create' }
            ]}
        >
            <p className="text-muted-foreground">Subject creation form will be displayed here</p>
        </AdminPage>
    );
}
