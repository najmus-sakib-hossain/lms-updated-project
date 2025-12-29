import AdminPage from '@/layouts/admin-page-layout';

export default function CreateTeacher() {
    return (
        <AdminPage 
            title="Add New Teacher" 
            description="Register a new teacher"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Teachers', href: '/admin/teachers' },
                { title: 'Create', href: '/admin/teachers/create' }
            ]}
        >
            <p className="text-muted-foreground">Teacher registration form will be displayed here</p>
        </AdminPage>
    );
}
