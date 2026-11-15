import { mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { defineConfig } from "vitest/config";

// Tests get their own settings folder so they never change the real app's recent or open project.
export default defineConfig({
  test: { env: { RELAY_HOME: mkdtempSync(join(tmpdir(), "relay-home-")) } },
});
