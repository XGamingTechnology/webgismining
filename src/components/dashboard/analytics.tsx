'use client';

import { useState } from 'react';
import { TrendingUp, TrendingDown, Activity, AlertTriangle, Clock, DollarSign } from 'lucide-react';
import { assets, alerts, dashboardStats } from '@/lib/data';
import { formatNumber } from '@/utils/formatters';

interface ChartData {
  label: string;
  value: number;
}

// Dummy data untuk charts
const activityData: ChartData[] = [
  { label: '00:00', value: 35 },
  { label: '04:00', value: 28 },
  { label: '08:00', value: 65 },
  { label: '12:00', value: 78 },
  { label: '16:00', value: 72 },
  { label: '20:00', value: 45 },
];

const violationData: ChartData[] = [
  { label: 'Sen', value: 3 },
  { label: 'Sel', value: 5 },
  { label: 'Rab', value: 2 },
  { label: 'Kam', value: 7 },
  { label: 'Jum', value: 4 },
  { label: 'Sab', value: 1 },
  { label: 'Min', value: 2 },
];

const fuelData: ChartData[] = [
  { label: 'TRK-001', value: 78 },
  { label: 'TRK-002', value: 45 },
  { label: 'TRK-003', value: 92 },
  { label: 'TRK-004', value: 65 },
  { label: 'TRK-005', value: 30 },
];

export default function Analytics() {
  const [selectedPeriod, setSelectedPeriod] = useState<'day' | 'week' | 'month'>('week');

  const totalDistance = 2845.2;
  const avgSpeed = 42;
  const idleTime = 18.5;
  const fuelCost = 1250000;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-white">Analytics & Reports</h2>
        <div className="flex gap-2">
          {(['day', 'week', 'month'] as const).map((period) => (
            <button
              key={period}
              onClick={() => setSelectedPeriod(period)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                selectedPeriod === period
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:text-white'
              }`}
            >
              {period.charAt(0).toUpperCase() + period.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-slate-800 rounded-xl border border-gray-700 p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-gray-400 text-sm">Total Jarak</span>
            <Activity className="w-5 h-5 text-blue-400" />
          </div>
          <div className="text-2xl font-bold text-white mb-1">{formatNumber(totalDistance)} km</div>
          <div className="flex items-center text-xs text-green-400">
            <TrendingUp className="w-3 h-3 mr-1" />
            +12.5% dari periode sebelumnya
          </div>
        </div>

        <div className="bg-slate-800 rounded-xl border border-gray-700 p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-gray-400 text-sm">Kecepatan Rata-rata</span>
            <Activity className="w-5 h-5 text-purple-400" />
          </div>
          <div className="text-2xl font-bold text-white mb-1">{avgSpeed} km/h</div>
          <div className="flex items-center text-xs text-gray-400">
            Dalam batas normal
          </div>
        </div>

        <div className="bg-slate-800 rounded-xl border border-gray-700 p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-gray-400 text-sm">Waktu Idle</span>
            <Clock className="w-5 h-5 text-yellow-400" />
          </div>
          <div className="text-2xl font-bold text-white mb-1">{idleTime} jam</div>
          <div className="flex items-center text-xs text-red-400">
            <TrendingDown className="w-3 h-3 mr-1" />
            +3.2 jam dari normal
          </div>
        </div>

        <div className="bg-slate-800 rounded-xl border border-gray-700 p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-gray-400 text-sm">Biaya Bahan Bakar</span>
            <DollarSign className="w-5 h-5 text-green-400" />
          </div>
          <div className="text-2xl font-bold text-white mb-1">Rp {formatNumber(fuelCost)}</div>
          <div className="flex items-center text-xs text-green-400">
            <TrendingDown className="w-3 h-3 mr-1" />
            -5.3% lebih efisien
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Activity Chart */}
        <div className="bg-slate-800 rounded-xl border border-gray-700 p-4">
          <h3 className="text-lg font-semibold text-white mb-4">Aktivitas Armada</h3>
          <div className="h-48 flex items-end justify-between gap-2">
            {activityData.map((item, index) => (
              <div key={index} className="flex-1 flex flex-col items-center gap-2">
                <div
                  className="w-full bg-gradient-to-t from-green-600 to-green-400 rounded-t-md transition-all hover:from-green-500 hover:to-green-300"
                  style={{ height: `${item.value}%` }}
                />
                <span className="text-xs text-gray-400">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Violations Chart */}
        <div className="bg-slate-800 rounded-xl border border-gray-700 p-4">
          <h3 className="text-lg font-semibold text-white mb-4">Pelanggaran per Hari</h3>
          <div className="h-48 flex items-end justify-between gap-2">
            {violationData.map((item, index) => (
              <div key={index} className="flex-1 flex flex-col items-center gap-2">
                <div
                  className="w-full bg-gradient-to-t from-orange-600 to-orange-400 rounded-t-md transition-all hover:from-orange-500 hover:to-orange-300"
                  style={{ height: `${(item.value / 10) * 100}%` }}
                />
                <span className="text-xs text-gray-400">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fuel Level & Recent Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Fuel Levels */}
        <div className="bg-slate-800 rounded-xl border border-gray-700 p-4">
          <h3 className="text-lg font-semibold text-white mb-4">Level Bahan Bakar</h3>
          <div className="space-y-3">
            {fuelData.map((item, index) => (
              <div key={index} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">{item.label}</span>
                  <span className={`font-medium ${
                    item.value > 70 ? 'text-green-400' : item.value > 40 ? 'text-yellow-400' : 'text-red-400'
                  }`}>{item.value}%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${
                      item.value > 70 ? 'bg-green-500' : item.value > 40 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Alerts */}
        <div className="bg-slate-800 rounded-xl border border-gray-700 p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-white">Alert Terbaru</h3>
            <AlertTriangle className="w-5 h-5 text-orange-400" />
          </div>
          <div className="space-y-3">
            {alerts.slice(0, 4).map((alert) => (
              <div
                key={alert.id}
                className={`p-3 rounded-lg border ${
                  alert.severity === 'critical' || alert.severity === 'high'
                    ? 'bg-red-500/10 border-red-500/30'
                    : alert.severity === 'medium'
                    ? 'bg-yellow-500/10 border-yellow-500/30'
                    : 'bg-blue-500/10 border-blue-500/30'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-white">{alert.message}</p>
                    <p className="text-xs text-gray-400 mt-1">{alert.assetId} • {alert.timestamp}</p>
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    alert.acknowledged ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                  }`}>
                    {alert.acknowledged ? 'Ack' : 'New'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}