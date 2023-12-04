#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const child_process_1 = require("child_process");
const os_1 = __importDefault(require("os"));
function getBinaryPath() {
    const platform = os_1.default.platform();
    console.log(platform);
    switch (platform) {
        case "linux":
            return path_1.default.join(__dirname, "linux", "loadfire");
        case "darwin":
            return path_1.default.join(__dirname, "darwin", "loadfire");
        case "win32":
            return path_1.default.join(__dirname, "win32", "loadfire.exe");
        default:
            throw new Error(`Unsupported platform: ${platform}`);
    }
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log(process.argv.slice(2).join(" "));
            const binaryPath = getBinaryPath();
            (0, child_process_1.execSync)(`${binaryPath} ${process.argv.slice(2).join(" ")}`, {
                stdio: "inherit",
            });
        }
        catch (error) {
            console.error("Error running loadfire:", error.message);
            process.exit(1);
        }
    });
}
main();
