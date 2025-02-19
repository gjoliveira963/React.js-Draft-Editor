// Importa os módulos necessários do React e o componente principal de página
import { StrictMode } from "react"; // Usa StrictMode para detecção de problemas
import { createRoot } from "react-dom/client"; // Cria a raiz do React para renderização
import IndexPage from "~/pages/index.page"; // Importa a página principal
import "~/styles/index.style.css"; // Importa os estilos globais

// Cria a raiz e renderiza o componente dentro do StrictMode, assegurando validação adicional do React
createRoot(document.body).render(
	<StrictMode>
		<IndexPage /> {/* Renderiza a página principal */}
	</StrictMode>,
);
