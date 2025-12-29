import AdminPage from '@/layouts/admin-page-layout';

export default function TeacherList() {
    return (
        <AdminPage 
            title="Teacher List" 
            description="View all teachers"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Teachers', href: '/admin/teachers' }
            ]}
        >
            <p className="text-muted-foreground">Teacher list will be displayed here</p>
        </AdminPage>
    );
}
