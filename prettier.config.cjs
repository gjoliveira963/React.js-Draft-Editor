// ===========================================================================================
// Arquivo de Configuração do Prettier (Formatação)
// ===========================================================================================

/* eslint-disable */
module.exports = {
	// Define se as setas de funções terão parênteses sempre.
	arrowParens: "always", // Opções: 'always' (padrão) | 'avoid'

	// Se as chaves de fechamento estarão na mesma linha do elemento.
	bracketSameLine: true, // Opções: false (padrão) | true

	// Define espaçamento entre chaves.
	bracketSpacing: true, // Opções: true (padrão) | false

	// Formatação de linguagens embutidas.
	embeddedLanguageFormatting: "auto", // Opções: 'auto' (padrão) | 'off'

	// Define o estilo de fim de linha.
	endOfLine: "lf", // Opções: 'lf' (padrão) | 'crlf' | 'cr' | 'auto'

	// Ativa recursos experimentais de formatação para ternários.
	experimentalTernaries: true, // Opções: false (padrão) | true

	// Posição do operador em quebras de linha.
	experimentalOperatorPosition: "start", // Opções: 'end' (padrão) | 'start'

	// Sensibilidade de espaços em branco para HTML.
	htmlWhitespaceSensitivity: "strict", // Opções: 'css' (padrão) | 'strict' | 'ignore'

	// Não insere pragma de formatação.
	insertPragma: false, // Opções: false (padrão) | true

	// Define se aspas simples serão utilizadas em JSX.
	jsxSingleQuote: false, // Opções: false (padrão) | true

	// Largura máxima da linha de código.
	printWidth: 80, // Padrão: 80

	// Determina que a formatação de prosa sempre quebre linhas.
	proseWrap: "always", // Opções: 'preserve' (padrão) | 'always' | 'never'

	// Estratégia de uso de aspas em propriedades de objetos.
	quoteProps: "consistent", // Opções: 'as-needed' (padrão) | 'consistent' | 'preserve'

	// Não exige pragma para formatação.
	requirePragma: false, // Opções: false (padrão) | true

	// Utiliza ponto-e-vírgula ao final das instruções.
	semi: true, // Opções: true (padrão) | false

	// Atributos únicos em linhas separadas.
	singleAttributePerLine: true, // Opções: false (padrão) | true

	// Usa aspas duplas (false = não usa aspas simples).
	singleQuote: false, // Opções: false (padrão) | true

	// Define a largura da tabulação.
	tabWidth: 2, // Padrão: 2

	// Adiciona vírgula ao final de itens em arrays/objetos.
	trailingComma: "all", // Opções: 'es5' (padrão) | 'none' | 'all'

	// Utiliza tabs em vez de espaços.
	useTabs: true, // Opções: false (padrão) | true

	// Identação de scripts e estilos do Vue.
	vueIndentScriptAndStyle: true, // Opções: false (padrão) | true

	// Define o início do range para formatação.
	rangeStart: 0, // Padrão: 0

	// Define o fim do range para formatação.
	rangeEnd: Infinity, // Padrão: Infinity

	// Especifica o parser a ser utilizado.
	//parser: <string>, // Padrão: <string>

	// Especifica o caminho do arquivo sendo formatado.
	//filepath: <string>, // Padrão: <string>
};
