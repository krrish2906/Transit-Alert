import { GoHome, GoHomeFill } from 'react-icons/go'
import { IoSettingsOutline, IoSettingsSharp } from 'react-icons/io5'
import { PiBell, PiBellFill, PiPresentationChart, PiPresentationChartFill, PiUsers, PiUsersFill } from 'react-icons/pi'

export const sidebar = [
    "dashboard",
    "alerts",
    "analytics",
    "users",
    "settings"
] as const;

export type SidebarData = typeof sidebar[number];

export const icons = [
    {
        blank: GoHome,
        fill: GoHomeFill
    },
    {
        blank: PiBell,
        fill: PiBellFill
    },
    {
        blank: PiPresentationChart,
        fill: PiPresentationChartFill
    },
    {
        blank: PiUsers,
        fill: PiUsersFill
    },
    {
        blank: IoSettingsOutline,
        fill: IoSettingsSharp
    }
] as const;