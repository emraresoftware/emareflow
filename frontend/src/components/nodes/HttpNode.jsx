import React from 'react';
import { Handle, Position } from 'reactflow';

const METHOD_COLORS = {
  GET: 'bg-emerald-50 text-emerald-600 border-emerald-100',
  POST: 'bg-blue-50 text-blue-600 border-blue-100',
  PUT: 'bg-amber-50 text-amber-600 border-amber-100',
  DELETE: 'bg-red-50 text-red-600 border-red-100',
};

export default function HttpNode({ data, selected }) {
  const methodCls = METHOD_COLORS[data.method] || METHOD_COLORS.GET;

  return (
    <div
      className={`
        min-w-[180px] rounded-3xl bg-white border px-4 py-3
        transition-shadow duration-200
        ${selected
          ? 'border-emerald-500 shadow-xl shadow-emerald-500/30'
          : 'border-gray-100 shadow-md hover:shadow-xl hover:shadow-emerald-500/20'}
      `}
    >
      <Handle type="target" position={Position.Left} className="!bg-emerald-500" />

      <div className="flex items-center gap-2 mb-2">
        <span className="text-lg">🌐</span>
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">HTTP Node</span>
      </div>

      <p className="text-sm font-bold text-gray-800">{data.label}</p>

      {data.url && (
        <p className="mt-1 text-xs text-gray-400 truncate max-w-[160px]">{data.url}</p>
      )}

      {data.method && (
        <div className={`mt-2 inline-flex items-center text-[10px] px-2 py-0.5 rounded-full border font-semibold ${methodCls}`}>
          {data.method}
        </div>
      )}

      <Handle type="source" position={Position.Right} className="!bg-emerald-500" />
    </div>
  );
}
