import DraftEditor from "~/components/DraftEditor.component"; // Importa o editor de rascunho
import IndexLayout from "~/layouts/index.layout"; // Importa o layout padrão para a página

export default function IndexPage() {
	return (
		<IndexLayout>
			{/* Utiliza o layout principal que contém header, main e footer */}
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
				<h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
					Rascunho da Redação {/* Título da página */}
				</h1>
				{/* Insere o componente de edição de texto */}
				<DraftEditor />
			</div>
		</IndexLayout>
	);
}
