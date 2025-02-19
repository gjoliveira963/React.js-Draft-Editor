import { useRef, useState } from "react";
import { Paragraph as ParagraphType } from "~/types/draft";
import Paragraph from "./Paragraph.component";

// Componente principal para edição e visualização do rascunho
export default function DraftEditor() {
	// Contador para IDs sequenciais
	const idCounter = useRef(1);

	// Inicializa os parágrafos lendo do localStorage
	const [paragraphs, setParagraphs] = useState<ParagraphType[]>(() => {
		const saved = localStorage.getItem("draft_paragraphs");
		return saved ? JSON.parse(saved) : [];
	});
	const [currentText, setCurrentText] = useState<string>("");
	const [editingId, setEditingId] = useState<string | null>(null);
	const [editingText, setEditingText] = useState<string>("");
	const [viewMode, setViewMode] = useState<boolean>(false);

	// Adiciona um novo parágrafo
	const handleAddParagraph = () => {
		if (currentText.trim() === "") return;
		const newParagraph: ParagraphType = {
			id: idCounter.current.toString(),
			content: currentText,
		};
		idCounter.current++;
		const updatedParas = [...paragraphs, newParagraph];
		setParagraphs(updatedParas);
		setCurrentText("");
	};

	// Salva o rascunho gravando o state no localStorage
	const handleSaveDraft = () => {
		localStorage.setItem("draft_paragraphs", JSON.stringify(paragraphs));
		alert("Rascunho salvo com sucesso!");
	};

	// Limpa os parágrafos e remove os dados do localStorage
	const handleClearDraft = () => {
		setParagraphs([]);
		localStorage.removeItem("draft_paragraphs");
	};

	// Inicia a edição de um parágrafo
	const handleStartEdit = (id: string, currentContent: string) => {
		setEditingId(id);
		setEditingText(currentContent);
	};

	// Salva a edição do parágrafo
	const handleSaveEdit = (id: string) => {
		const updatedParas = paragraphs.map((paragraph) =>
			paragraph.id === id ? { ...paragraph, content: editingText } : paragraph,
		);
		setParagraphs(updatedParas);
		setEditingId(null);
		setEditingText("");
	};

	// Remove um parágrafo (atualizando somente o state)
	const handleDeleteParagraph = (id: string) => {
		const updatedParas = paragraphs.filter((paragraph) => paragraph.id !== id);
		setParagraphs(updatedParas);
	};

	// Renderização do componente no modo de visualização
	if (viewMode) {
		return (
			<div className="flex flex-col space-y-6">
				<div className="mb-4">
					{/* Título para a visualização do texto */}
					<h2 className="text-2xl font-bold mb-4">Visualização do Texto</h2>
					{/* Exibe os parágrafos ou mensagem caso não haja conteúdo */}
					<div className="bg-gray-50 p-4 rounded border border-gray-200">
						{paragraphs.length === 0 ?
							<p>Nenhum parágrafo adicionado.</p>
						:	paragraphs.map((paragraph) => (
								<Paragraph
									key={paragraph.id}
									content={paragraph.content}
								/>
							))
						}
					</div>
				</div>
				{/* Botão para voltar ao modo de edição */}
				<button
					onClick={() => setViewMode(false)}
					className="w-full p-2 px-4 text-base sm:text-lg bg-indigo-500 text-white rounded flex items-center justify-center space-x-2">
					<i className="fa-solid fa-arrow-left"></i>
					<span className="hidden sm:inline">Voltar para Edição</span>
				</button>
			</div>
		);
	}

	// Renderização do componente no modo de edição
	return (
		<div className="flex flex-col space-y-6">
			<div className="space-y-4">
				{/* Área de texto para digitar um novo parágrafo */}
				<textarea
					placeholder="Digite o parágrafo aqui..."
					value={currentText}
					onChange={(event) => setCurrentText(event.target.value)}
					onKeyDown={function (e) {
						if (e.key === "Enter") {
							e.preventDefault();
							handleAddParagraph();
						}
					}}
					className="w-full p-3 text-lg border border-gray-300 bg-white rounded resize-none"
				/>
				{/* Botões performáticos para adicionar, salvar, limpar e visualizar o texto */}
				<div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-4 gap-3">
					<button
						onClick={handleAddParagraph}
						className="w-full p-2 px-4 text-base sm:text-lg bg-blue-500 text-white rounded flex items-center justify-center space-x-2">
						<i className="fa-solid fa-plus"></i>
						<span className="hidden sm:inline">Adicionar Parágrafo</span>
					</button>
					<button
						onClick={handleSaveDraft}
						className="w-full p-2 px-4 text-base sm:text-lg bg-green-500 text-white rounded flex items-center justify-center space-x-2">
						<i className="fa-solid fa-floppy-disk"></i>
						<span className="hidden sm:inline">Salvar Rascunho</span>
					</button>
					<button
						onClick={handleClearDraft}
						className="w-full p-2 px-4 text-base sm:text-lg bg-red-500 text-white rounded flex items-center justify-center space-x-2">
						<i className="fa-solid fa-eraser"></i>
						<span className="hidden sm:inline">Limpar Texto</span>
					</button>
					<button
						onClick={() => setViewMode(true)}
						className="w-full p-2 px-4 text-base sm:text-lg bg-indigo-500 text-white rounded flex items-center justify-center space-x-2">
						<i className="fa-solid fa-eye"></i>
						<span className="hidden sm:inline">Visualizar Texto</span>
					</button>
				</div>
			</div>

			{/* Seção que exibe o texto completo com opção de editar ou apagar */}
			<div className="bg-gray-100 p-4 rounded">
				<h2 className="text-xl mb-4">Texto Completo</h2>
				{paragraphs.length === 0 ?
					<p>Nenhum parágrafo adicionado.</p>
				:	paragraphs.map((paragraph) => (
						<div
							key={paragraph.id}
							className="mb-4">
							{
								editingId === paragraph.id ?
									// Se o parágrafo está em modo edição, exibe input e botões de controle
									<>
										<input
											title="Editar parágrafo"
											value={editingText}
											onChange={(e) => setEditingText(e.target.value)}
											onKeyDown={(e) =>
												e.key === "Enter" && handleSaveEdit(paragraph.id)
											}
											className="w-full p-2 mb-2 text-lg border border-gray-300 rounded"
										/>
										<div className="grid grid-cols-2 gap-3">
											<button
												onClick={() => handleSaveEdit(paragraph.id)}
												className="w-full p-2 px-4 text-base sm:text-lg bg-green-500 text-white rounded flex items-center justify-center space-x-2">
												<i className="fa-solid fa-check"></i>
												<span className="hidden sm:inline">Salvar</span>
											</button>
											<button
												onClick={() => setEditingId(null)}
												className="w-full p-2 px-4 text-base sm:text-lg bg-gray-500 text-white rounded flex items-center justify-center space-x-2">
												<i className="fa-solid fa-xmark"></i>
												<span className="hidden sm:inline">Cancelar</span>
											</button>
										</div>
									</>
									// Exibe o parágrafo com botões de editar e apagar
								:	<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
										<Paragraph content={paragraph.content} />
										{/* Mobile: botões circulares para editar e apagar */}
										<div className="flex sm:hidden mt-2 space-x-2">
											<button
												title="Editar parágrafo"
												onClick={() =>
													handleStartEdit(paragraph.id, paragraph.content)
												}
												className="w-10 h-10 bg-yellow-500 text-white rounded-full flex items-center justify-center">
												<i className="fa-solid fa-pencil"></i>
											</button>
											<button
												title="Apagar parágrafo"
												onClick={() => handleDeleteParagraph(paragraph.id)}
												className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center">
												<i className="fa-solid fa-trash"></i>
											</button>
										</div>
										{/* Desktop: botões com ícone e texto para editar e apagar */}
										<div className="hidden sm:flex flex-col sm:flex-row gap-2 mt-2 sm:mt-0 space-y-2 sm:space-y-0 sm:space-x-2">
											<button
												onClick={() =>
													handleStartEdit(paragraph.id, paragraph.content)
												}
												className="p-2 px-3 text-sm sm:text-base bg-yellow-500 text-white rounded flex items-center justify-center space-x-2"
												title="Editar parágrafo">
												<i className="fa-solid fa-pencil"></i>
												<span>Editar</span>
											</button>
											<button
												onClick={() => handleDeleteParagraph(paragraph.id)}
												className="p-2 px-3 text-sm sm:text-base bg-red-500 text-white rounded flex items-center justify-center space-x-2"
												title="Apagar parágrafo">
												<i className="fa-solid fa-trash"></i>
												<span>Apagar</span>
											</button>
										</div>
									</div>

							}
						</div>
					))
				}
			</div>
		</div>
	);
}
