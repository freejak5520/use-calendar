import react from "@vitejs/plugin-react-swc";
import { glob } from "glob";
import { extname, relative, resolve } from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ["lib"],
      tsconfigPath: "./tsconfig.lib.json",
      exclude: ["lib/**/*.stories.{ts,tsx}", "lib/**/*.test.{ts,tsx}"],
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      formats: ["es"],
    },
    copyPublicDir: false,
    rollupOptions: {
      external: ["react", "react/jsx-runtime", "react-dom"],
      input: Object.fromEntries(
        glob
          .sync("lib/**/*.{ts,tsx}", {
            ignore: ["lib/**/*.d.ts", "lib/**/*.test.{ts,tsx}"],
          })
          .map((file) => [
            // 엔트리 포인트의 이름
            // lib/nested/foo.ts는 nested/foo로 변환됩니다
            relative("lib", file.slice(0, file.length - extname(file).length)),
            // 엔트리 포인트 파일의 절대 경로
            // lib/nested/foo.ts는 /project/lib/nested/foo.ts로 변환됩니다
            fileURLToPath(new URL(file, import.meta.url)),
          ])
      ),
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js",
      },
    },
  },
});
