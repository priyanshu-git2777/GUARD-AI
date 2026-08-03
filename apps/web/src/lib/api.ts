import type { HealthApiResponse } from "@/types/health";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8080";

export async function getBackendHealth(): Promise<HealthApiResponse> {
  const response = await fetch(`${API_BASE_URL}/api/v1/health`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Backend health request failed with ${response.status}`);
  }

  return response.json() as Promise<HealthApiResponse>;
}
