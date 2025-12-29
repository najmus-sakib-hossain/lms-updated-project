import AdminPage from '@/layouts/admin-page-layout';

export default function AssignSubjects() {
    return (
        <AdminPage 
            title="Assign Teachers To Subjects" 
            description="Assign teachers to subjects"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Teachers', href: '/admin/teachers' },
                { title: 'Assign Subjects', href: '/admin/teachers/assign-subjects' }
            ]}
        >
            <p className="text-muted-foreground">Subject assignment interface will be displayed here</p>
        </AdminPage>
    );
}
