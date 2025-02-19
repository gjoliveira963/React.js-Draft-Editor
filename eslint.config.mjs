// ===========================================================================================
// Arquivo de Configuração do Eslint (Correção)
// -------------------------------------------------------------------------------------------

import { includeIgnoreFile } from "@eslint/compat"; // Permite utilizar arquivos de ignore (ex.: .gitignore)
import js from "@eslint/js"; // Configuração base para JS
import eslintConfigPrettier from "eslint-config-prettier"; // Garante compatibilidade entre ESLint e Prettier
import eslintPluginPrettier from "eslint-plugin-prettier"; // Integração do Prettier com ESLint
import react from "eslint-plugin-react"; // Regras para componentes e sintaxes do React
import reactHooks from "eslint-plugin-react-hooks"; // Valida o uso correto dos hooks
import reactRefresh from "eslint-plugin-react-refresh"; // Suporte para atualização rápida durante o desenvolvimento
import globals from "globals"; // Define variáveis globais predefinidas para evitar avisos
import path from "node:path"; // Manipulação de caminhos de sistema
import { fileURLToPath } from "node:url"; // Converte URL em caminho de arquivo
import tseslint from "typescript-eslint"; // Regras e configurações para projetos TypeScript

const __filename = fileURLToPath(import.meta.url); // Obtém o caminho completo deste arquivo
const __dirname = path.dirname(__filename); // Determina o diretório atual do arquivo
const gitignorePath = path.resolve(__dirname, ".gitignore"); // Localiza o arquivo .gitignore para integração com ESLint

// Exporta a configuração do ESLint como um array de configurações, combinando várias regras e plugins
export default [
	// Inclui as regras de ignore definidas no arquivo .gitignore para o ESLint
	includeIgnoreFile(gitignorePath), // Configuração para ignorar arquivos conforme .gitignore

	// Aplica as configurações recomendadas para JavaScript
	js.configs.recommended, // Regras básicas recomendadas para JS

	// Espalha as configurações recomendadas para TypeScript, garantindo suporte para TS
	...tseslint.configs.recommended, // Incorpora regras recomendadas para TypeScript

	// Aplica a configuração do Prettier para desativar regras que conflitam com a formatação
	eslintConfigPrettier, // Ajusta a formatação do código com Prettier

	// Define uma configuração personalizada adicional para o ESLint
	{
		// Configurações específicas para o ambiente React
		settings: {
			react: {
				// Permite que o ESLint detecte automaticamente a versão do React instalada
				version: "detect", // Detecção automática da versão do React
			},
		},
		// Define os arquivos aos quais essa configuração será aplicada (JS, JSX, TS, TSX)
		files: ["**/*.{js,jsx,ts,tsx}"], // Aplica a todos os arquivos JavaScript/TypeScript e suas variações JSX/TSX
		// Opções de linguagem para o parser do ESLint
		languageOptions: {
			parserOptions: {
				// Indica que o código utiliza módulos ES (import/export)
				sourceType: "module", // Habilita ES Modules
				// Especifica que será utilizada a versão mais recente do ECMAScript
				ecmaVersion: "latest", // Suporta as features mais novas do JS
				// Habilita recursos específicos para JSX e TSX, necessários para projetos React
				ecmaFeatures: {
					jsx: true, // Habilita a sintaxe JSX
					tsx: true, // Habilita a sintaxe TSX para TypeScript com React
				},
			},
			// Define variáveis globais disponíveis nos ambientes Node, Vitest (testes) e Browser
			globals: {
				...globals.node, // Variáveis globais para ambiente Node.js
				...globals.vitest, // Variáveis globais para o framework de testes Vitest
				...globals.browser, // Variáveis globais para ambiente de navegador
			},
		},
		// Configuração dos plugins que adicionam regras e funcionalidades extras ao ESLint
		plugins: {
			react, // Plugin para regras do React
			"react-hooks": reactHooks, // Plugin para validação dos hooks do React
			"react-refresh": reactRefresh, // Plugin para integração com React Refresh (hot reloading)
			"prettier": eslintPluginPrettier, // Plugin que integra Prettier para formatação de código
		},
		// Define as regras que o ESLint irá aplicar ao código
		rules: {
			// Configura o Prettier para emitir avisos (warnings) ao invés de erros, facilitando a formatação
			"prettier/prettier": "warn", // Alerta para formatação inadequada segundo Prettier
			// Incorpora as regras recomendadas para JavaScript
			...js.configs.recommended.rules, // Regras recomendadas do ESLint para JS
			// Incorpora as regras recomendadas para TypeScript
			...tseslint.configs.recommended.rules, // Regras recomendadas para TS
			// Incorpora as regras recomendadas para o React
			...react.configs.recommended.rules, // Regras básicas para projetos React
			// Incorpora regras específicas para o runtime de JSX, garantindo sintaxe adequada
			...react.configs["jsx-runtime"].rules, // Regras para o novo runtime de JSX
			// Incorpora as regras recomendadas para os hooks do React, assegurando boas práticas
			...reactHooks.configs.recommended.rules, // Regras para uso correto dos hooks
		},
	},
];
