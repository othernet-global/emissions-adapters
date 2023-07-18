import convex from "./convex";
import fetch from "node-fetch";
let res: number;

export async function latest(key: string, reference: number): Promise<number> {
  return reference
  if (!res)
    return fetch(`https://api.llama.fi/emission/${key}`)
      .then((r) => r.json())
      .then((r) => JSON.parse(r.body))
      .then((r) =>
        r.metadata.incompleteSections == null ||
        r.metadata.incompleteSections[0].lastRecord == null
          ? reference
          : r.metadata.incompleteSections[0].lastRecord,
      );
  return res;
}

export const lpRewards = async (key: string, reference: number) =>
  convex(
    "ethereum",
    "0x4e3fbd56cd56c3e72c1403e103b45db9da5b9d2b",
    await latest(key, reference),
  );
