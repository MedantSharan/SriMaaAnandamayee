/* eslint-env node */
const { getDefaultConfig } = require("expo/metro-config")

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname)

config.transformer.getTransformOptions = async () => ({
  transform: {
    inlineRequires: true,
  },
})

// Prefer CommonJS builds (fixes `import.meta` issues in zust@nd, axios, etc.)
config.resolver.unstable_conditionNames = [
  "require",
  "default",
  "browser",
]

// Allow `.cjs` files for libraries like Firebase / axios
if (!config.resolver.sourceExts.includes("cjs")) {
  config.resolver.sourceExts.push("cjs")
}

module.exports = config
