import AdminPage from '@/layouts/admin-page-layout';

export default function NewAdmission() {
    return (
        <AdminPage 
            title="New Admission" 
            description="Admit a new student"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'New Admission', href: '/admin/admissions/create' }
            ]}
        >
            <p className="text-muted-foreground">Admission form will be displayed here</p>
        </AdminPage>
    );
}
