#!/usr/bin/env node

import path from "path";
import { execSync } from "child_process";
import os from "os";

function getBinaryPath() {
  const platform = os.platform();
  console.log(platform);
  switch (platform) {
    case "linux":
      return path.join(__dirname, "linux", "loadfire");
    case "darwin":
      return path.join(__dirname, "darwin", "loadfire");
    case "win32":
      return path.join(__dirname, "win32", "loadfire.exe");
    default:
      throw new Error(`Unsupported platform: ${platform}`);
  }
}

async function main() {
  try {
    console.log(process.argv.slice(2).join(" "));
    const binaryPath = getBinaryPath();
    execSync(`${binaryPath} ${process.argv.slice(2).join(" ")}`, {
      stdio: "inherit",
    });
  } catch (error: any) {
    console.error("Error running loadfire:", error.message);
    process.exit(1);
  }
}

main();
