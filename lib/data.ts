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

export const latestAlerts = [
    {
        title: 'N Judah Line',
        description: 'Due to track maintenance, expect delays on the N Judah line.',
        severity: 'low'
    },
    {
        title: '1 California Line',
        description: 'The 1 California line is temporarily rerouted due to a street closure.',
        severity: 'medium'
    },
    {
        title: '38 Geary Line',
        description: 'The 38 Geary line is experiencing minor delays due to increased traffic.',
        severity: 'low'
    },
    {
        title: 'FC Road',
        description: 'Transportation closed due to heavy rains and flood situations',
        severity: 'high'
    },
    {
        title: 'Dagdusheth Ganpati Marg',
        description: 'Expected delays due to ganesh festival, road blocks and public gathering',
        severity: 'high'
    },
] as const;