import React from 'react';
import { Handle, Position } from 'reactflow';

export default function FinanceNode({ data, selected }) {
  return (
    <div
      className={`
        min-w-[180px] rounded-3xl bg-white border px-4 py-3
        transition-shadow duration-200
        ${selected
          ? 'border-amber-500 shadow-xl shadow-amber-500/30'
          : 'border-gray-100 shadow-md hover:shadow-xl hover:shadow-amber-500/20'}
      `}
    >
      <Handle type="target" position={Position.Left} className="!bg-amber-500" />

      <div className="flex items-center gap-2 mb-2">
        <span className="text-lg">💸</span>
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Finance Node</span>
      </div>

      <p className="text-sm font-bold text-gray-800">{data.label}</p>

      {data.action && (
        <div className="mt-2 inline-flex items-center gap-1 text-[10px] bg-amber-50 text-amber-600 px-2 py-0.5 rounded-full border border-amber-100">
          <i className="fa-solid fa-receipt" />
          {data.action}
        </div>
      )}

      <Handle type="source" position={Position.Right} className="!bg-amber-500" />
    </div>
  );
}
