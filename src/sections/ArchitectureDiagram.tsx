import React from 'react';
import type { ArchitectureFlow, ArchitectureNode, ArchitectureNodeType } from '../types/caseStudy';

const TYPE_COLORS: Record<ArchitectureNodeType, { stroke: string; fill: string; text: string }> = {
  client: { stroke: '#fb923c', fill: 'rgba(251,146,60,0.08)', text: '#fdba74' },
  api: { stroke: '#fb7185', fill: 'rgba(251,113,133,0.08)', text: '#fda4af' },
  service: { stroke: '#ef4444', fill: 'rgba(239,68,68,0.08)', text: '#fca5a5' },
  db: { stroke: '#f59e0b', fill: 'rgba(245,158,11,0.08)', text: '#fcd34d' },
  external: { stroke: '#f43f5e', fill: 'rgba(244,63,94,0.08)', text: '#fda4af' },
  queue: { stroke: '#fbbf24', fill: 'rgba(251,191,36,0.08)', text: '#fcd34d' },
};

export const TYPE_LABELS: Record<ArchitectureNodeType, string> = {
  client: 'Client',
  api: 'API',
  service: 'Service',
  db: 'Data Store',
  external: 'External',
  queue: 'Queue',
};

interface ArchitectureDiagramProps {
  nodes: ArchitectureNode[];
  flows: ArchitectureFlow[];
}

const NODE_W = 210;
const NODE_H = 62;
const GAP_X = 84;
const GAP_Y = 76;
const MARGIN = 70;
const COLS = 3;

/** Renders a data-driven architecture diagram (SVG lines + positioned nodes). */
export const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({ nodes, flows }) => {
  const positions: Record<string, { x: number; y: number }> = {};
  nodes.forEach((node, idx) => {
    const col = idx % COLS;
    const row = Math.floor(idx / COLS);
    positions[node.id] = {
      x: MARGIN + col * (NODE_W + GAP_X),
      y: MARGIN + row * (NODE_H + GAP_Y),
    };
  });

  const rows = Math.max(1, Math.ceil(nodes.length / COLS));
  const width = MARGIN * 2 + COLS * NODE_W + (COLS - 1) * GAP_X;
  const height = MARGIN * 2 + rows * NODE_H + (rows - 1) * GAP_Y;

  const center = (id: string) => {
    const p = positions[id];
    return { x: p.x + NODE_W / 2, y: p.y + NODE_H / 2 };
  };

  return (
    <div data-testid="case-study-arch-diagram" className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4 sm:p-6">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-auto"
        role="img"
        aria-label="Architecture diagram"
      >
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#fca5a5" />
          </marker>
        </defs>

        {/* Flows */}
        {flows.map((flow, i) => {
          const from = center(flow.from);
          const to = center(flow.to);
          if (!from || !to) return null;
          const mid = { x: (from.x + to.x) / 2, y: (from.y + to.y) / 2 };
          return (
            <g key={i}>
              <line
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="#ef4444"
                strokeWidth="1.5"
                strokeDasharray="5 4"
                opacity="0.7"
                markerEnd="url(#arrowhead)"
              />
              {flow.label && (
                <text
                  x={mid.x}
                  y={mid.y - 7}
                  textAnchor="middle"
                  fill="#fca5a5"
                  fontSize="11"
                  fontFamily="'JetBrains Mono', monospace"
                >
                  {flow.label}
                </text>
              )}
            </g>
          );
        })}

        {/* Nodes */}
        {nodes.map((node) => {
          const p = positions[node.id];
          const c = TYPE_COLORS[node.type];
          return (
            <g key={node.id}>
              <rect
                x={p.x}
                y={p.y}
                width={NODE_W}
                height={NODE_H}
                rx="10"
                fill={c.fill}
                stroke={c.stroke}
                strokeWidth="1.5"
              />
              <text
                x={p.x + NODE_W / 2}
                y={p.y + NODE_H / 2}
                textAnchor="middle"
                dominantBaseline="middle"
                fill={c.text}
                fontSize="13"
                fontWeight="600"
              >
                {node.label}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap gap-3 border-t border-slate-800 pt-3">
        {(Object.keys(TYPE_LABELS) as ArchitectureNodeType[]).map((type) => (
          <span key={type} className="inline-flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
            <span
              className="w-2.5 h-2.5 rounded-sm"
              style={{ backgroundColor: TYPE_COLORS[type].stroke }}
            />
            {TYPE_LABELS[type]}
          </span>
        ))}
      </div>
    </div>
  );
};
