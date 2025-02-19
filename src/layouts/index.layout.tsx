import { ReactNode } from "react";

interface IndexLayoutProps {
	children: ReactNode; // Conteúdo principal a ser renderizado
}

export default function IndexLayout({ children }: IndexLayoutProps) {
	return (
		<>
			<header className="bg-gray-800 text-white py-4 px-4 sm:px-6 lg:px-8">
				<h1 className="text-xl sm:text-2xl">
					Editor de Rascunhos {/* Cabeçalho do layout */}
				</h1>
			</header>
			<main className="min-h-screen py-8">
				{/* Área central para renderização dos componentes filhos */}
				{children}
			</main>
			<footer className="bg-gray-800 text-white py-4 px-4 sm:px-6 lg:px-8 text-center">
				<a
					href="https://github.com/gjoliveira963"
					className="text-sm">
					Desenvolvido por{" "}
					<span className="underline">Gabriel José Oliveira</span>
					{/* Rodapé do layout */}
				</a>
			</footer>
		</>
	);
}
