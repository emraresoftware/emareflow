import React from 'react';
import { Handle, Position } from 'reactflow';

export default function AsistanNode({ data, selected }) {
  return (
    <div
      className={`
        min-w-[180px] rounded-3xl bg-white border px-4 py-3
        transition-shadow duration-200
        ${selected
          ? 'border-blue-500 shadow-xl shadow-blue-500/30'
          : 'border-gray-100 shadow-md hover:shadow-xl hover:shadow-blue-500/20'}
      `}
    >
      <Handle type="target" position={Position.Left} className="!bg-blue-500" />

      <div className="flex items-center gap-2 mb-2">
        <span className="text-lg">💬</span>
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Asistan Node</span>
      </div>

      <p className="text-sm font-bold text-gray-800">{data.label}</p>

      {data.phone && (
        <p className="mt-1 text-xs text-gray-400">{data.phone}</p>
      )}

      <div className="mt-2 inline-flex items-center gap-1 text-[10px] bg-blue-50 text-blue-500 px-2 py-0.5 rounded-full border border-blue-100">
        <i className="fa-brands fa-whatsapp" />
        WhatsApp
      </div>

      <Handle type="source" position={Position.Right} className="!bg-blue-500" />
    </div>
  );
}
