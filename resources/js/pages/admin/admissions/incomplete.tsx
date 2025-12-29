import AdminPage from '@/layouts/admin-page-layout';

export default function IncompletedAdmissions() {
    return (
        <AdminPage 
            title="Incompleted Admissions" 
            description="View and complete pending admissions"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Incompleted Admissions', href: '/admin/admissions/incomplete' }
            ]}
        >
            <p className="text-muted-foreground">Incomplete admissions list will be displayed here</p>
        </AdminPage>
    );
}
