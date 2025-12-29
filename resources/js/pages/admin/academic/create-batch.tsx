import AdminPage from '@/layouts/admin-page-layout';

export default function CreateBatch() {
    return (
        <AdminPage 
            title="Create Batch" 
            description="Add a new batch"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Academic', href: '/admin/academic/overview' },
                { title: 'Create Batch', href: '/admin/academic/batches/create' }
            ]}
        >
            <p className="text-muted-foreground">Batch creation form will be displayed here</p>
        </AdminPage>
    );
}
