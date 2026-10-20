"use client";

import { useEffect, useState } from "react";

type Order = { id: string; risk: "low" | "high" };

// Illustrative queue: shows how each order is scored, confirmed and routed.
const ORDERS: Order[] = [
  { id: "#1042", risk: "low" },
  { id: "#1043", risk: "high" },
  { id: "#1044", risk: "low" },
  { id: "#1045", risk: "high" },
];

const STAGES = 4;

function statusFor(order: Order, stage: number) {
  if (stage === 0) return { label: "Risk scored", tone: "idle" };
  if (stage === 1) return { label: "Voice AI calling", tone: "live" };
  if (stage === 2)
    return order.risk === "low"
      ? { label: "Confirmed", tone: "good" }
      : { label: "Sent to human", tone: "warn" };
  return order.risk === "low"
    ? { label: "Dispatched", tone: "good" }
    : { label: "Held for review", tone: "warn" };
}

export function OrderFlow() {
  const [tick, setTick] = useState(2);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setTick((t) => t + 1), 1700);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="flow" role="img" aria-label="Illustration of orders being risk scored, confirmed by Voice AI and dispatched or escalated">
      <div className="flow-head">
        <span className="flow-title">Order queue</span>
        <span className="flow-live">
          <i /> Illustrative
        </span>
      </div>
      <ul className="flow-list">
        {ORDERS.map((order, i) => {
          const stage = (tick + i) % STAGES;
          const s = statusFor(order, stage);
          return (
            <li key={order.id} className="flow-row">
              <div className="flow-id">
                <span className="mono">{order.id}</span>
                <span className="flow-meta">COD</span>
              </div>
              <span className={`chip chip-${order.risk}`}>
                {order.risk === "low" ? "Lower risk" : "Higher risk"}
              </span>
              <span className={`status status-${s.tone}`} key={s.label}>
                <i />
                {s.label}
              </span>
            </li>
          );
        })}
      </ul>
      <div className="flow-foot">
        <span>Low-risk orders move through.</span>
        <span>High-risk orders get a human.</span>
      </div>
    </div>
  );
}
