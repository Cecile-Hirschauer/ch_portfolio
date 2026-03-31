import { colors } from "../src/colors";
import { typography } from "../src/typography";
import { spacing } from "../src/spacing";
import * as fs from "node:fs";
import * as path from "node:path";

function flattenObject(obj: Record<string, unknown>, prefix = ""): Record<string, string> {
  const result: Record<string, string> = {};
  for (const [key, value] of Object.entries(obj)) {
    const cssKey = prefix ? `${prefix}-${key}` : key;
    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      Object.assign(result, flattenObject(value as Record<string, unknown>, cssKey));
    } else {
      result[cssKey] = String(value);
    }
  }
  return result;
}

function generateCSS(): string {
  const lines: string[] = [":root {"];

  const colorVars = flattenObject(colors, "color");
  for (const [key, value] of Object.entries(colorVars)) {
    lines.push(`  --${key}: ${value};`);
  }

  lines.push("");

  const fontFamilyVars = flattenObject(typography.fontFamily, "font-family");
  for (const [key, value] of Object.entries(fontFamilyVars)) {
    lines.push(`  --${key}: ${value};`);
  }

  lines.push("");

  const fontSizeVars = flattenObject(typography.fontSize, "font-size");
  for (const [key, value] of Object.entries(fontSizeVars)) {
    lines.push(`  --${key}: ${value};`);
  }

  lines.push("");

  const spacingVars = flattenObject(spacing, "spacing");
  for (const [key, value] of Object.entries(spacingVars)) {
    lines.push(`  --${key}: ${value};`);
  }

  lines.push("");
  lines.push("  --border-radius-none: 0;");
  lines.push("  --border-radius-sm: 2px;");
  lines.push("");
  lines.push("  --transition-fast: 150ms ease;");
  lines.push("  --transition-base: 300ms ease;");

  lines.push("}");
  return lines.join("\n") + "\n";
}

const distDir = path.resolve(__dirname, "../dist");
fs.mkdirSync(distDir, { recursive: true });
fs.writeFileSync(path.resolve(distDir, "tokens.css"), generateCSS());
console.log("Generated dist/tokens.css");
