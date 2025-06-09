"use client";

import React, { useEffect, useRef } from "react";
import mermaid from "mermaid";

const MermaidChart = ({ chart }: { chart: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    mermaid.initialize({ startOnLoad: false });

    const renderChart = async () => {
      const id = "mermaid-" + Math.random().toString(36).substr(2, 9);
      try {
        const { svg } = await mermaid.render(id, chart);
        containerRef.current!.innerHTML = svg;
      } catch (err) {
        console.error("Mermaid render error:", err);
        containerRef.current!.innerHTML = `<pre>${err instanceof Error ? err.message : err}</pre>`;
      }
    };

    renderChart();
  }, [chart]);

  return (
    <div
      ref={containerRef}
      className="w-full overflow-x-auto rounded-md bg-zinc-900 text-white p-4"
    />
  );
};

export default MermaidChart;
