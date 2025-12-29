import AdminPage from '@/layouts/admin-page-layout';

export default function BatchTransfer() {
    return (
        <AdminPage 
            title="Batch Transfer" 
            description="Transfer students to different batches"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Students', href: '/admin/students' },
                { title: 'Batch Transfer', href: '/admin/students/batch-transfer' }
            ]}
        >
            <p className="text-muted-foreground">Batch transfer interface will be displayed here</p>
        </AdminPage>
    );
}
