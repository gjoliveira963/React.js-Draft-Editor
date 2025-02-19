interface ParagraphProps {
	content: string; // Conteúdo textual que será exibido
}

export default function Paragraph({ content }: ParagraphProps) {
	// Renderiza um parágrafo com estilos para formatação
	return <p className="leading-relaxed mb-4 whitespace-pre-wrap">{content}</p>;
}
