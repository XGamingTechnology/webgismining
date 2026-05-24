'use client';

import {
  Truck,
  Wifi,
  WifiOff,
  AlertTriangle,
  Clock,
  PauseCircle,
  TrendingUp,
  TrendingDown,
} from 'lucide-react';

// Interface untuk data statistik
interface StatCardData {
  id: string;
  label: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  iconColor?: string;
}

// Data statis untuk 6 kartu statistik
const statsData: StatCardData[] = [
  {
    id: 'total-assets',
    label: 'Total Aset',
    value: 58,
    icon: <Truck className="w-6 h-6" />,
    iconColor: 'text-blue-400',
  },
  {
    id: 'active-assets',
    label: 'Aset Aktif',
    value: 49,
    icon: <Wifi className="w-6 h-6" />,
    trend: { value: 84.5, isPositive: true },
    iconColor: 'text-green-400',
  },
  {
    id: 'offline-assets',
    label: 'Aset Offline',
    value: 9,
    icon: <WifiOff className="w-6 h-6" />,
    trend: { value: 15.5, isPositive: false },
    iconColor: 'text-red-400',
  },
  {
    id: 'violations-today',
    label: 'Pelanggaran Hari Ini',
    value: 5,
    icon: <AlertTriangle className="w-6 h-6" />,
    trend: { value: 25, isPositive: false },
    iconColor: 'text-orange-400',
  },
  {
    id: 'total-operational-hours',
    label: 'Total Jam Operasional',
    value: '128h 45m',
    icon: <Clock className="w-6 h-6" />,
    iconColor: 'text-purple-400',
  },
  {
    id: 'stopped-30min',
    label: 'Berhenti > 30 Menit',
    value: 7,
    icon: <PauseCircle className="w-6 h-6" />,
    iconColor: 'text-yellow-400',
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
      {statsData.map((stat) => (
        <div
          key={stat.id}
          className="bg-slate-800 rounded-xl border border-gray-700 p-4 hover:border-gray-500 transition-colors cursor-default"
        >
          {/* Icon dan Label */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-gray-400 text-sm">{stat.label}</span>
            <div className={`${stat.iconColor || 'text-gray-400'}`}>
              {stat.icon}
            </div>
          </div>

          {/* Value */}
          <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>

          {/* Trend Indicator (jika ada) */}
          {stat.trend && (
            <div
              className={`flex items-center text-xs ${
                stat.trend.isPositive ? 'text-green-400' : 'text-red-400'
              }`}
            >
              {stat.trend.isPositive ? (
                <TrendingUp className="w-3 h-3 mr-1" />
              ) : (
                <TrendingDown className="w-3 h-3 mr-1" />
              )}
              {stat.trend.isPositive ? '+' : '-'}{stat.trend.value}%
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
