import React, { useCallback } from 'react';
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  addEdge,
  useNodesState,
  useEdgesState,
} from 'reactflow';
import 'reactflow/dist/style.css';

import AINode from './components/nodes/AINode';
import HttpNode from './components/nodes/HttpNode';
import FinanceNode from './components/nodes/FinanceNode';
import AsistanNode from './components/nodes/AsistanNode';

// ─── Node tipleri kaydı ──────────────────────────────────────────────────────
const nodeTypes = {
  aiNode: AINode,
  httpNode: HttpNode,
  financeNode: FinanceNode,
  asistanNode: AsistanNode,
};

// ─── Başlangıç canvas durumu ─────────────────────────────────────────────────
const initialNodes = [
  {
    id: 'trigger-1',
    type: 'httpNode',
    position: { x: 80, y: 200 },
    data: { label: 'Webhook Tetikleyici', method: 'POST', url: '/trigger' },
  },
  {
    id: 'ai-1',
    type: 'aiNode',
    position: { x: 320, y: 200 },
    data: { label: 'Gemini Analiz', prompt: 'Gelen veriyi analiz et ve özetle.' },
  },
  {
    id: 'asistan-1',
    type: 'asistanNode',
    position: { x: 560, y: 200 },
    data: { label: 'WhatsApp Bildir', phone: '+90xxxxxxxxxx' },
  },
];

const initialEdges = [
  {
    id: 'e-trigger-ai',
    source: 'trigger-1',
    target: 'ai-1',
    animated: true,
    style: { stroke: '#6366f1', strokeWidth: 2 },
  },
  {
    id: 'e-ai-asistan',
    source: 'ai-1',
    target: 'asistan-1',
    animated: true,
    style: { stroke: '#6366f1', strokeWidth: 2 },
  },
];

// ─── MiniMap node renkleri ────────────────────────────────────────────────────
const nodeColor = (node) => {
  const colorMap = {
    aiNode: '#818cf8',
    httpNode: '#34d399',
    financeNode: '#fbbf24',
    asistanNode: '#60a5fa',
  };
  return colorMap[node.type] || '#6366f1';
};

// ─── Uygulama ─────────────────────────────────────────────────────────────────
export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge(
          { ...params, animated: true, style: { stroke: '#6366f1', strokeWidth: 2 } },
          eds
        )
      ),
    [setEdges]
  );

  return (
    <div className="w-screen h-screen bg-gray-950">
      {/* ── Başlık ── */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
        <span className="text-2xl">🔄</span>
        <span className="text-white font-bold text-lg tracking-tight">Emare Flow</span>
        <span className="ml-2 text-xs bg-brand-500/20 text-brand-400 px-2 py-0.5 rounded-full border border-brand-500/30">
          alpha
        </span>
      </div>

      {/* ── Canvas ── */}
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        proOptions={{ hideAttribution: true }}
      >
        <Background color="#1f2937" gap={20} />
        <Controls className="!bg-gray-800 !border-gray-700 !text-gray-300" />
        <MiniMap
          nodeColor={nodeColor}
          className="!bg-gray-900 !border-gray-700"
          maskColor="rgba(17,24,39,0.8)"
        />
      </ReactFlow>
    </div>
  );
}
