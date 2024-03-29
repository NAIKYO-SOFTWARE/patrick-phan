import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
});

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import replace from "rollup-plugin-replace";
// import commonjs from "rollup-plugin-commonjs";
// import { terser } from "rollup-plugin-terser";

// export default defineConfig({
//   plugins: [
//     react(),
//     replace({
//       "process.env.NODE_ENV": JSON.stringify("production"),
//     }),
//     commonjs(),
//     terser(),
//   ],
//   server: {
//     port: 3000,
//   },
// });
