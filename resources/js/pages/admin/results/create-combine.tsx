import AdminPage from '@/layouts/admin-page-layout';

export default function CreateCombineResult() {
    return (
        <AdminPage 
            title="Create Combine Result" 
            description="Create combined exam results"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Results', href: '/admin/results/exams' },
                { title: 'Create Combine', href: '/admin/results/combine/create' }
            ]}
        >
            <p className="text-muted-foreground">Combine result creation form will be displayed here</p>
        </AdminPage>
    );
}
