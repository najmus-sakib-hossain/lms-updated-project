import AdminPage from '@/layouts/admin-page-layout';

export default function CombineResultList() {
    return (
        <AdminPage 
            title="Combine Result List" 
            description="View combined results"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Results', href: '/admin/results/exams' },
                { title: 'Combine List', href: '/admin/results/combine' }
            ]}
        >
            <p className="text-muted-foreground">Combine result list will be displayed here</p>
        </AdminPage>
    );
}
