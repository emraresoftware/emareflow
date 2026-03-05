import React from 'react';
import { Handle, Position } from 'reactflow';

export default function AINode({ data, selected }) {
  return (
    <div
      className={`
        min-w-[180px] rounded-3xl bg-white border px-4 py-3
        transition-shadow duration-200
        ${selected
          ? 'border-brand-500 shadow-xl shadow-brand-500/30'
          : 'border-gray-100 shadow-md hover:shadow-xl hover:shadow-brand-500/20'}
      `}
    >
      <Handle type="target" position={Position.Left} className="!bg-brand-500" />

      {/* Başlık */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-lg">🤖</span>
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">AI Node</span>
      </div>

      {/* Etiket */}
      <p className="text-sm font-bold text-gray-800 leading-tight">{data.label}</p>

      {/* Prompt önizleme */}
      {data.prompt && (
        <p className="mt-1.5 text-xs text-gray-400 line-clamp-2">{data.prompt}</p>
      )}

      {/* Model rozeti */}
      <div className="mt-2 inline-flex items-center gap-1 text-[10px] bg-violet-50 text-violet-500 px-2 py-0.5 rounded-full border border-violet-100">
        <i className="fa-solid fa-microchip" />
        Gemini 1.5 Pro
      </div>

      <Handle type="source" position={Position.Right} className="!bg-brand-500" />
    </div>
  );
}
