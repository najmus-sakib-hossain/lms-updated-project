import AdminPage from '@/layouts/admin-page-layout';

export default function CustomReportCard() {
    return (
        <AdminPage 
            title="Custom Report Card" 
            description="Customize report card template"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Settings', href: '/admin/settings/ip-listing' },
                { title: 'Report Card', href: '/admin/settings/custom-report-card' }
            ]}
        >
            <p className="text-muted-foreground">Report card customization will be displayed here</p>
        </AdminPage>
    );
}
