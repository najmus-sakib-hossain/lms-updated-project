import AdminPage from '@/layouts/admin-page-layout';

export default function ClassTaskList() {
    return (
        <AdminPage 
            title="Class Task List" 
            description="View class-wise task assignments"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Homework', href: '/admin/homework' },
                { title: 'Class Tasks', href: '/admin/homework/class-tasks' }
            ]}
        >
            <p className="text-muted-foreground">Class task list will be displayed here</p>
        </AdminPage>
    );
}
