import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: { globals: globals.browser },
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        process: 'readonly',
        __dirname: 'readonly',
        module: 'readonly',
        require: 'readonly',
      },
    },
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      // Buenas prácticas generales
      'no-console': 'warn', // Avisa si se usa console.log (en producción sería mejor un logger tipo Winston)
      'prefer-const': 'error', // Prefiere const cuando las variables no cambian
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Permite variables que empiezan con _ (ej: (_, res) en controladores)

      // Reglas relacionadas a estilo de código
      'prettier/prettier': 'error', // Prettier obligatorio como formateador
      'no-multiple-empty-lines': ['error', { max: 1 }], // Máximo una línea vacía
      'object-curly-spacing': ['error', 'always'], // Espacios dentro de llaves: { ejemplo }

      // Opcional: otros ajustes de estilo
      semi: ['error', 'always'], // Siempre usar punto y coma
      quotes: ['error', 'single'], // Comillas simples
    },
  },
]);
