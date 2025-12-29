import AdminPage from '@/layouts/admin-page-layout';

export default function EditBranch({ branchId }: { branchId: string }) {
    return (
        <AdminPage 
            title="Edit Branch" 
            description="Update branch information"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Branches', href: '/admin/branches' },
                { title: 'Edit', href: `/admin/branches/${branchId}/edit` }
            ]}
        >
            <p className="text-muted-foreground">Branch edit form will be displayed here</p>
        </AdminPage>
    );
}
