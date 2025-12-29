import AdminPage from '@/layouts/admin-page-layout';

export default function StudentDeactivation() {
    return (
        <AdminPage 
            title="Student Deactivation" 
            description="Deactivate students"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Students', href: '/admin/students' },
                { title: 'Deactivation', href: '/admin/students/deactivation' }
            ]}
        >
            <p className="text-muted-foreground">Student deactivation interface will be displayed here</p>
        </AdminPage>
    );
}
