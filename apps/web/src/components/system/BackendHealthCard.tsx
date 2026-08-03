"use client";

import { useEffect, useState } from "react";
import { getBackendHealth } from "@/lib/api";
import type { HealthData } from "@/types/health";

type RequestState =
  | { status: "loading" }
  | { status: "success"; data: HealthData }
  | { status: "error"; message: string };

export default function BackendHealthCard() {
  const [state, setState] = useState<RequestState>({ status: "loading" });

  async function checkBackend() {
    setState({ status: "loading" });

    try {
      const response = await getBackendHealth();
      setState({ status: "success", data: response.data });
    } catch (error) {
      setState({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "The backend health request failed.",
      });
    }
  }

  useEffect(() => {
    void checkBackend();
  }, []);

  return (
    <article className="glass-card flex min-h-56 flex-col justify-between p-6">
      <div>
        <p className="eyebrow">Live connection test</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
          Spring Boot API
        </h2>
        <p className="mt-3 leading-7 text-slate-600">
          This card calls the real backend from the browser. It is not hardcoded.
        </p>
      </div>

      <div className="mt-7">
        {state.status === "loading" && (
          <p className="text-sm font-medium text-slate-600">
            Checking backend connection…
          </p>
        )}

        {state.status === "success" && (
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/80 p-4">
            <p className="font-semibold text-emerald-800">
              Connected — {state.data.status}
            </p>
            <p className="mt-1 text-sm text-emerald-700">
              {state.data.service} · version {state.data.version}
            </p>
          </div>
        )}

        {state.status === "error" && (
          <div className="rounded-2xl border border-rose-200 bg-rose-50/80 p-4">
            <p className="font-semibold text-rose-800">
              Backend is not reachable
            </p>
            <p className="mt-1 break-words text-sm text-rose-700">
              {state.message}
            </p>
          </div>
        )}

        <button
          type="button"
          onClick={() => void checkBackend()}
          className="mt-4 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-300"
        >
          Check again
        </button>
      </div>
    </article>
  );
}
