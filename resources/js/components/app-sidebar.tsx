import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { 
    BookOpen, 
    Folder, 
    LayoutGrid,
    Building2,
    GraduationCap,
    UserPlus,
    Users,
    TrendingUp,
    FileText,
    DollarSign,
    CalendarCheck,
    BookMarked,
    ClipboardList,
    Calendar,
    UserCheck,
    Briefcase,
    TrendingDown,
    Wallet,
    PhoneCall,
    MessageSquare,
    CreditCard,
    Shield,
    Settings,
    Video,
    MessageCircle
} from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: '/admin/dashboard',
        icon: LayoutGrid,
    },
    {
        title: 'Branch Management',
        href: '/admin/branches',
        icon: Building2,
        items: [
            { title: 'Add New Branch', href: '/admin/branches/create' },
            { title: 'Branch List', href: '/admin/branches' },
        ],
    },
    {
        title: 'Academic Function',
        href: '/admin/academic/overview',
        icon: GraduationCap,
        items: [
            { title: 'Create Class', href: '/admin/academic/classes/create' },
            { title: 'Create Subject', href: '/admin/academic/subjects/create' },
            { title: 'Create Group', href: '/admin/academic/groups/create' },
            { title: 'Create Batch', href: '/admin/academic/batches/create' },
            { title: 'Over-view', href: '/admin/academic/overview' },
        ],
    },
    {
        title: 'Admission',
        href: '/admin/admissions/create',
        icon: UserPlus,
        items: [
            { title: 'New Admission', href: '/admin/admissions/create' },
            { title: 'Incompleted Admissions', href: '/admin/admissions/incomplete' },
        ],
    },
    {
        title: 'Student Details',
        href: '/admin/students',
        icon: Users,
        items: [
            { title: 'Students List View', href: '/admin/students' },
            { title: 'Student Deactivation', href: '/admin/students/deactivation' },
            { title: 'Batch Transfer', href: '/admin/students/batch-transfer' },
        ],
    },
    {
        title: 'Class Promotion',
        href: '/admin/promotion',
        icon: TrendingUp,
    },
    {
        title: 'Student Reports',
        href: '/admin/reports/payment',
        icon: FileText,
        items: [
            { title: 'Payment Reports', href: '/admin/reports/payment' },
            { title: 'Attendance Reports', href: '/admin/reports/attendance' },
            { title: 'Result Reports', href: '/admin/reports/result' },
            { title: 'Monthly Report Card', href: '/admin/reports/monthly-report-card' },
            { title: 'Monthly Homework Report', href: '/admin/reports/monthly-homework' },
        ],
    },
    {
        title: 'Fee Collection',
        href: '/admin/fees/receive',
        icon: DollarSign,
        items: [
            { title: 'Receive Student Fee', href: '/admin/fees/receive' },
            { title: 'Student Fee History', href: '/admin/fees/history' },
            { title: 'Due List', href: '/admin/fees/due-list' },
            { title: 'Regenerate Fees', href: '/admin/fees/regenerate' },
            { title: 'Cancel Payment', href: '/admin/fees/cancel-payment' },
            { title: 'Fee Category', href: '/admin/fees/categories' },
            { title: 'Extra Fee Assignment', href: '/admin/fees/extra-assignment' },
        ],
    },
    {
        title: 'Student Attendance',
        href: '/admin/attendance/create',
        icon: CalendarCheck,
        items: [
            { title: 'Create Attendance', href: '/admin/attendance/create' },
            { title: 'Attendance List', href: '/admin/attendance' },
            { title: 'Monthly Attendance List', href: '/admin/attendance/monthly' },
            { title: 'Download Attendance Blank Sheet', href: '/admin/attendance/download-blank-sheet' },
        ],
    },
    {
        title: 'Homework Management',
        href: '/admin/homework/create',
        icon: BookMarked,
        items: [
            { title: 'Add New Homework', href: '/admin/homework/create' },
            { title: 'Homework List', href: '/admin/homework' },
            { title: 'Class Task List', href: '/admin/homework/class-tasks' },
        ],
    },
    {
        title: 'Result Management',
        href: '/admin/results/exams/create',
        icon: ClipboardList,
        items: [
            { title: 'Create Exam', href: '/admin/results/exams/create' },
            { title: 'Exam List', href: '/admin/results/exams' },
            { title: 'Create Combine Result', href: '/admin/results/combine/create' },
            { title: 'Combine Result List', href: '/admin/results/combine' },
            { title: 'Exam Category', href: '/admin/results/categories' },
        ],
    },
    {
        title: 'Routine Management',
        href: '/admin/routines/create',
        icon: Calendar,
        items: [
            { title: 'Add New Routine', href: '/admin/routines/create' },
            { title: 'View Class Routine', href: '/admin/routines' },
        ],
    },
    {
        title: 'Teachers Management',
        href: '/admin/teachers',
        icon: UserCheck,
        items: [
            { title: 'Add New Teacher', href: '/admin/teachers/create' },
            { title: 'Teacher List', href: '/admin/teachers' },
            { title: 'Take Attendance', href: '/admin/teachers/attendance/take' },
            { title: 'Attendance List', href: '/admin/teachers/attendance' },
            { title: 'Monthly Attendance Report', href: '/admin/teachers/attendance/monthly' },
            { title: 'Assign Teachers To Subjects', href: '/admin/teachers/assign-subjects' },
            { title: 'List Of Assigned Teacher', href: '/admin/teachers/assigned-list' },
        ],
    },
    {
        title: 'Employee Management',
        href: '/admin/employees',
        icon: Briefcase,
        items: [
            { title: 'Add New Staff', href: '/admin/employees/create' },
            { title: 'Staff List', href: '/admin/employees' },
            { title: 'Manual Attendance', href: '/admin/employees/attendance/manual' },
            { title: 'Self Attendance', href: '/admin/employees/attendance/self' },
            { title: 'Break Time In-Out', href: '/admin/employees/attendance/break' },
            { title: 'Attendance List', href: '/admin/employees/attendance' },
            { title: 'Attendance Monthly Report', href: '/admin/employees/attendance/monthly' },
        ],
    },
    {
        title: 'Income Management',
        href: '/admin/income/create',
        icon: TrendingUp,
        items: [
            { title: 'New income', href: '/admin/income/create' },
            { title: 'Income Report', href: '/admin/income/report' },
            { title: 'Manage Category', href: '/admin/income/categories' },
        ],
    },
    {
        title: 'Expense Management',
        href: '/admin/expenses/create',
        icon: TrendingDown,
        items: [
            { title: 'Create Expense', href: '/admin/expenses/create' },
            { title: 'Expense Report', href: '/admin/expenses/report' },
            { title: 'Manage Category', href: '/admin/expenses/categories' },
        ],
    },
    {
        title: 'Salary Management',
        href: '/admin/salary/create',
        icon: Wallet,
        items: [
            { title: 'Create Salary', href: '/admin/salary/create' },
            { title: 'Advance Salary', href: '/admin/salary/advance' },
            { title: 'Teacher Salary Report', href: '/admin/salary/teachers-report' },
            { title: 'Staff Salary Report', href: '/admin/salary/staff-report' },
        ],
    },
    {
        title: 'Leads Generation',
        href: '/admin/leads/create',
        icon: PhoneCall,
        items: [
            { title: 'Create Leads', href: '/admin/leads/create' },
            { title: 'Show FrontDesk List', href: '/admin/leads/frontdesk' },
            { title: 'Show Marketing List', href: '/admin/leads/marketing' },
        ],
    },
    {
        title: 'SMS Management',
        href: '/admin/sms/bulk',
        icon: MessageSquare,
        items: [
            { title: 'Bulk SMS', href: '/admin/sms/bulk' },
            { title: 'Due List SMS', href: '/admin/sms/due-list' },
            { title: 'SMS History', href: '/admin/sms/history' },
            { title: 'Purchase SMS', href: '/admin/sms/purchase' },
            { title: 'SMS Settings', href: '/admin/sms/settings' },
        ],
    },
    {
        title: 'Manage Subscription',
        href: '/admin/subscription/profile',
        icon: CreditCard,
        items: [
            { title: 'Update Institute Profile', href: '/admin/subscription/profile' },
            { title: 'Subscription Status', href: '/admin/subscription/status' },
        ],
    },
    {
        title: 'Roles & Permissions',
        href: '/admin/roles/permissions',
        icon: Shield,
        items: [
            { title: 'Permission Assigned List', href: '/admin/roles/permissions' },
        ],
    },
    {
        title: 'Settings',
        href: '/admin/settings/ip-listing',
        icon: Settings,
        items: [
            { title: 'IP Listing', href: '/admin/settings/ip-listing' },
            { title: 'Custom Report Card', href: '/admin/settings/custom-report-card' },
        ],
    },
    {
        title: 'Tutorials',
        href: '/admin/tutorials',
        icon: Video,
    },
    {
        title: 'কমপ্লেইন ও পরামর্শ',
        href: '/admin/support',
        icon: MessageCircle,
    },
];

const footerNavItems: NavItem[] = [
    // {
    //     title: 'Repository',
    //     href: 'https://github.com/laravel/react-starter-kit',
    //     icon: Folder,
    // },
    // {
    //     title: 'Documentation',
    //     href: 'https://laravel.com/docs/starter-kits#react',
    //     icon: BookOpen,
    // },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
