import AdminPage from '@/layouts/admin-page-layout';

export default function StudentsList() {
    return (
        <AdminPage 
            title="Students List View" 
            description="View all students"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Students', href: '/admin/students' }
            ]}
        >
            <p className="text-muted-foreground">Students list will be displayed here</p>
        </AdminPage>
    );
}
