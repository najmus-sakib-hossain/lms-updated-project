import AdminPage from '@/layouts/admin-page-layout';

export default function DownloadBlankSheet() {
    return (
        <AdminPage 
            title="Download Attendance Blank Sheet" 
            description="Download blank attendance sheets"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Attendance', href: '/admin/attendance' },
                { title: 'Download', href: '/admin/attendance/download-blank-sheet' }
            ]}
        >
            <p className="text-muted-foreground">Blank sheet download options will be displayed here</p>
        </AdminPage>
    );
}
