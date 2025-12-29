import AdminPage from '@/layouts/admin-page-layout';

export default function HomeworkList() {
    return (
        <AdminPage 
            title="Homework List" 
            description="View all homework assignments"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Homework', href: '/admin/homework' }
            ]}
        >
            <p className="text-muted-foreground">Homework list will be displayed here</p>
        </AdminPage>
    );
}
