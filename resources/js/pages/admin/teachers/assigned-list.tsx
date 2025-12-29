import AdminPage from '@/layouts/admin-page-layout';

export default function AssignedTeacherList() {
    return (
        <AdminPage 
            title="List Of Assigned Teacher" 
            description="View teacher-subject assignments"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Teachers', href: '/admin/teachers' },
                { title: 'Assigned List', href: '/admin/teachers/assigned-list' }
            ]}
        >
            <p className="text-muted-foreground">Assigned teacher list will be displayed here</p>
        </AdminPage>
    );
}
