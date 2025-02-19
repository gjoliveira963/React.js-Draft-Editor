// ===========================================================================================
// Arquivo de Configuração do Vite (Desenvolvimento)
// -------------------------------------------------------------------------------------------

import tailwindcss from "@tailwindcss/vite"; // Integra o Tailwind CSS ao Vite para facilitar o uso das classes utilitárias
import react from "@vitejs/plugin-react-swc"; // Plugin para suporte ao React com melhorias de performance usando SWC
import path from "path"; // Utilitário para resolução e manipulação de caminhos no sistema de arquivos
import { defineConfig } from "vite"; // Garante uma configuração tipada e com autocompletar para o Vite

// Exporta a configuração do Vite utilizando a função defineConfig para encapsular as opções de configuração
export default defineConfig({
	// Lista de plugins que serão aplicados durante o processo de build e desenvolvimento
	plugins: [
		react(), // Inicializa o plugin do React, permitindo o processamento adequado de arquivos JSX/TSX
		tailwindcss(), // Inicializa o plugin do Tailwind CSS para aplicar as classes de estilização definidas
	],
	// Configurações relacionadas à resolução de módulos e alias de caminhos
	resolve: {
		alias: {
			// Cria um alias para o diretório "src", permitindo importações mais simples utilizando "~" ao invés de caminhos relativos complexos
			"~": path.resolve(__dirname, "src"), // Facilita a organização e importação de módulos do diretório "src"
		},
	},
});
