"use client";

import { useEffect, useRef } from "react";

interface Block {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  rotation: number;
  rotSpeed: number;
}

function drawCube(ctx: CanvasRenderingContext2D, x: number, y: number, s: number, rot: number, alpha: number) {
  const h = s * 0.5; // isometric top height
  const cos = Math.cos(rot);
  const sin = Math.sin(rot);

  // Rotate the base square
  const corners = [
    [-s, -s], [s, -s], [s, s], [-s, s],
  ].map(([cx, cy]) => [
    x + cx * cos - cy * sin,
    y + cx * sin + cy * cos,
  ]);

  // Top face (lighter)
  ctx.beginPath();
  ctx.moveTo(corners[0][0], corners[0][1] - h);
  ctx.lineTo(corners[1][0], corners[1][1] - h);
  ctx.lineTo(corners[2][0], corners[2][1] - h);
  ctx.lineTo(corners[3][0], corners[3][1] - h);
  ctx.closePath();
  ctx.fillStyle = `rgba(122, 192, 205, ${alpha * 0.55})`;
  ctx.fill();
  ctx.strokeStyle = `rgba(122, 192, 205, ${alpha * 0.9})`;
  ctx.lineWidth = 0.7;
  ctx.stroke();

  // Front face (medium)
  ctx.beginPath();
  ctx.moveTo(corners[3][0], corners[3][1] - h);
  ctx.lineTo(corners[2][0], corners[2][1] - h);
  ctx.lineTo(corners[2][0], corners[2][1]);
  ctx.lineTo(corners[3][0], corners[3][1]);
  ctx.closePath();
  ctx.fillStyle = `rgba(30, 90, 120, ${alpha * 0.4})`;
  ctx.fill();
  ctx.strokeStyle = `rgba(122, 192, 205, ${alpha * 0.6})`;
  ctx.lineWidth = 0.7;
  ctx.stroke();

  // Right face (darker)
  ctx.beginPath();
  ctx.moveTo(corners[1][0], corners[1][1] - h);
  ctx.lineTo(corners[2][0], corners[2][1] - h);
  ctx.lineTo(corners[2][0], corners[2][1]);
  ctx.lineTo(corners[1][0], corners[1][1]);
  ctx.closePath();
  ctx.fillStyle = `rgba(20, 60, 90, ${alpha * 0.35})`;
  ctx.fill();
  ctx.strokeStyle = `rgba(122, 192, 205, ${alpha * 0.5})`;
  ctx.lineWidth = 0.7;
  ctx.stroke();
}

export default function NetworkVisual({ blockCount = 22 }: { blockCount?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const W = canvas.offsetWidth;
    const H = canvas.offsetHeight;
    canvas.width = W * window.devicePixelRatio;
    canvas.height = H * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    const BLOCK_COUNT = blockCount;
    const MAX_DIST = 160;

    const blocks: Block[] = Array.from({ length: BLOCK_COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      size: Math.random() * 2 + 1.25,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.008,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // Update
      for (const b of blocks) {
        b.x += b.vx;
        b.y += b.vy;
        b.rotation += b.rotSpeed;
        if (b.x < 0 || b.x > W) b.vx *= -1;
        if (b.y < 0 || b.y > H) b.vy *= -1;
      }

      // Draw chain lines
      for (let i = 0; i < blocks.length; i++) {
        for (let j = i + 1; j < blocks.length; j++) {
          const dx = blocks[i].x - blocks[j].x;
          const dy = blocks[i].y - blocks[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.2;
            // Dashed chain-link style
            ctx.setLineDash([4, 6]);
            ctx.beginPath();
            ctx.moveTo(blocks[i].x, blocks[i].y);
            ctx.lineTo(blocks[j].x, blocks[j].y);
            ctx.strokeStyle = `rgba(122, 192, 205, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
            ctx.setLineDash([]);

            // Mini cube at midpoint to suggest a chain link
            if (dist < MAX_DIST * 0.5) {
              const mx = (blocks[i].x + blocks[j].x) / 2;
              const my = (blocks[i].y + blocks[j].y) / 2;
              drawCube(ctx, mx, my, 5, Math.PI / 4, alpha * 3);
            }
          }
        }
      }

      // Draw cubes
      for (const b of blocks) {
        drawCube(ctx, b.x, b.y, b.size, b.rotation, 0.45);
      }

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
    />
  );
}
