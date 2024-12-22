import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { ModeToggle } from "./mode-toggle"
// Icons
import { Home, ShieldHalf, Search, Contact, LogIn, UserPlus } from "lucide-react"
import { useNavigate } from "react-router-dom"


const navList = [
    {
    title: "Home",
    url: "/",
    icon: Home,
    },
    {
    title: "Blog",
    url: "/blog",
    icon: Search,
    },
    {
    title: "About Us",
    url: "/about",
    icon: ShieldHalf,
    },
    {
    title: "Contact",
    url: "/contact",
    icon: Contact,
    },
]
const navUser = [
    {
    title: "Login",
    url: "/login",
    icon: LogIn,
    },
    {
    title: "Sign Up",
    url: "/signup",
    icon: UserPlus,
    },
]

export function AppSidebar() {
    const navigate = useNavigate();

    return (
    <Sidebar>

        <SidebarHeader>
            <h1 className="text-2xl font-bold text-center text-blue-600">My Blog</h1>
        </SidebarHeader>

        {/* Content */}
        <SidebarContent>
            <SidebarGroup>
                <SidebarGroupLabel>Forkfolio</SidebarGroupLabel>
                <SidebarGroupContent>
                <SidebarMenu>
                    {navList.map((link) => (
                    <SidebarMenuItem key={link.title}>
                        <SidebarMenuButton asChild>
                        <a className="cursor-pointer"
                        onClick={() => navigate(link.url)}
                        >
                            <link.icon />
                            <span>{link.title}</span>
                        </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    ))}
                </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>
        {/* End Content */}

        {/* Footer */}
        <SidebarFooter>
            <SidebarMenu>
                <SidebarMenuItem>
                <ModeToggle/>
                <SidebarMenu>
                {navUser.map((link) => (
                    <SidebarMenuItem key={link.title}>
                        <SidebarMenuButton asChild>
                        <a className="cursor-pointer"
                        onClick={() => navigate(link.url)}
                        >
                            <link.icon />
                            <span>{link.title}</span>
                        </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
                </SidebarMenu>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarFooter>
        {/* End Footer */}
    </Sidebar>
    )
}