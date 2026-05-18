import { a as MarkerSeverity, c as Range, d as Token, f as Uri, h as languages, i as KeyMod, l as Selection, m as editor_api2_exports, n as Emitter, o as MarkerTag, p as editor, r as KeyCode, s as Position, t as CancellationTokenSource, u as SelectionDirection } from "./monaco-editor.api2-Ct6mAj3C.js";
import { t as __vitePreload } from "./index-CsWiAL18.js";
//#region node_modules/@node-projects/monaco-editor-esm/esm/vs/basic-languages/vb/vb.js
var conf = {
	comments: {
		lineComment: "'",
		blockComment: ["/*", "*/"]
	},
	brackets: [
		["{", "}"],
		["[", "]"],
		["(", ")"],
		["<", ">"],
		["addhandler", "end addhandler"],
		["class", "end class"],
		["enum", "end enum"],
		["event", "end event"],
		["function", "end function"],
		["get", "end get"],
		["if", "end if"],
		["interface", "end interface"],
		["module", "end module"],
		["namespace", "end namespace"],
		["operator", "end operator"],
		["property", "end property"],
		["raiseevent", "end raiseevent"],
		["removehandler", "end removehandler"],
		["select", "end select"],
		["set", "end set"],
		["structure", "end structure"],
		["sub", "end sub"],
		["synclock", "end synclock"],
		["try", "end try"],
		["while", "end while"],
		["with", "end with"],
		["using", "end using"],
		["do", "loop"],
		["for", "next"]
	],
	autoClosingPairs: [
		{
			open: "{",
			close: "}",
			notIn: ["string", "comment"]
		},
		{
			open: "[",
			close: "]",
			notIn: ["string", "comment"]
		},
		{
			open: "(",
			close: ")",
			notIn: ["string", "comment"]
		},
		{
			open: "\"",
			close: "\"",
			notIn: ["string", "comment"]
		},
		{
			open: "<",
			close: ">",
			notIn: ["string", "comment"]
		}
	],
	folding: { markers: {
		start: /* @__PURE__ */ new RegExp("^\\s*#Region\\b"),
		end: /* @__PURE__ */ new RegExp("^\\s*#End Region\\b")
	} }
};
var language = {
	defaultToken: "",
	tokenPostfix: ".vb",
	ignoreCase: true,
	brackets: [
		{
			token: "delimiter.bracket",
			open: "{",
			close: "}"
		},
		{
			token: "delimiter.array",
			open: "[",
			close: "]"
		},
		{
			token: "delimiter.parenthesis",
			open: "(",
			close: ")"
		},
		{
			token: "delimiter.angle",
			open: "<",
			close: ">"
		},
		{
			token: "keyword.tag-addhandler",
			open: "addhandler",
			close: "end addhandler"
		},
		{
			token: "keyword.tag-class",
			open: "class",
			close: "end class"
		},
		{
			token: "keyword.tag-enum",
			open: "enum",
			close: "end enum"
		},
		{
			token: "keyword.tag-event",
			open: "event",
			close: "end event"
		},
		{
			token: "keyword.tag-function",
			open: "function",
			close: "end function"
		},
		{
			token: "keyword.tag-get",
			open: "get",
			close: "end get"
		},
		{
			token: "keyword.tag-if",
			open: "if",
			close: "end if"
		},
		{
			token: "keyword.tag-interface",
			open: "interface",
			close: "end interface"
		},
		{
			token: "keyword.tag-module",
			open: "module",
			close: "end module"
		},
		{
			token: "keyword.tag-namespace",
			open: "namespace",
			close: "end namespace"
		},
		{
			token: "keyword.tag-operator",
			open: "operator",
			close: "end operator"
		},
		{
			token: "keyword.tag-property",
			open: "property",
			close: "end property"
		},
		{
			token: "keyword.tag-raiseevent",
			open: "raiseevent",
			close: "end raiseevent"
		},
		{
			token: "keyword.tag-removehandler",
			open: "removehandler",
			close: "end removehandler"
		},
		{
			token: "keyword.tag-select",
			open: "select",
			close: "end select"
		},
		{
			token: "keyword.tag-set",
			open: "set",
			close: "end set"
		},
		{
			token: "keyword.tag-structure",
			open: "structure",
			close: "end structure"
		},
		{
			token: "keyword.tag-sub",
			open: "sub",
			close: "end sub"
		},
		{
			token: "keyword.tag-synclock",
			open: "synclock",
			close: "end synclock"
		},
		{
			token: "keyword.tag-try",
			open: "try",
			close: "end try"
		},
		{
			token: "keyword.tag-while",
			open: "while",
			close: "end while"
		},
		{
			token: "keyword.tag-with",
			open: "with",
			close: "end with"
		},
		{
			token: "keyword.tag-using",
			open: "using",
			close: "end using"
		},
		{
			token: "keyword.tag-do",
			open: "do",
			close: "loop"
		},
		{
			token: "keyword.tag-for",
			open: "for",
			close: "next"
		}
	],
	keywords: [
		"AddHandler",
		"AddressOf",
		"Alias",
		"And",
		"AndAlso",
		"As",
		"Async",
		"Boolean",
		"ByRef",
		"Byte",
		"ByVal",
		"Call",
		"Case",
		"Catch",
		"CBool",
		"CByte",
		"CChar",
		"CDate",
		"CDbl",
		"CDec",
		"Char",
		"CInt",
		"Class",
		"CLng",
		"CObj",
		"Const",
		"Continue",
		"CSByte",
		"CShort",
		"CSng",
		"CStr",
		"CType",
		"CUInt",
		"CULng",
		"CUShort",
		"Date",
		"Decimal",
		"Declare",
		"Default",
		"Delegate",
		"Dim",
		"DirectCast",
		"Do",
		"Double",
		"Each",
		"Else",
		"ElseIf",
		"End",
		"EndIf",
		"Enum",
		"Erase",
		"Error",
		"Event",
		"Exit",
		"False",
		"Finally",
		"For",
		"Friend",
		"Function",
		"Get",
		"GetType",
		"GetXMLNamespace",
		"Global",
		"GoSub",
		"GoTo",
		"Handles",
		"If",
		"Implements",
		"Imports",
		"In",
		"Inherits",
		"Integer",
		"Interface",
		"Is",
		"IsNot",
		"Let",
		"Lib",
		"Like",
		"Long",
		"Loop",
		"Me",
		"Mod",
		"Module",
		"MustInherit",
		"MustOverride",
		"MyBase",
		"MyClass",
		"NameOf",
		"Namespace",
		"Narrowing",
		"New",
		"Next",
		"Not",
		"Nothing",
		"NotInheritable",
		"NotOverridable",
		"Object",
		"Of",
		"On",
		"Operator",
		"Option",
		"Optional",
		"Or",
		"OrElse",
		"Out",
		"Overloads",
		"Overridable",
		"Overrides",
		"ParamArray",
		"Partial",
		"Private",
		"Property",
		"Protected",
		"Public",
		"RaiseEvent",
		"ReadOnly",
		"ReDim",
		"RemoveHandler",
		"Resume",
		"Return",
		"SByte",
		"Select",
		"Set",
		"Shadows",
		"Shared",
		"Short",
		"Single",
		"Static",
		"Step",
		"Stop",
		"String",
		"Structure",
		"Sub",
		"SyncLock",
		"Then",
		"Throw",
		"To",
		"True",
		"Try",
		"TryCast",
		"TypeOf",
		"UInteger",
		"ULong",
		"UShort",
		"Using",
		"Variant",
		"Wend",
		"When",
		"While",
		"Widening",
		"With",
		"WithEvents",
		"WriteOnly",
		"Xor"
	],
	tagwords: [
		"If",
		"Sub",
		"Select",
		"Try",
		"Class",
		"Enum",
		"Function",
		"Get",
		"Interface",
		"Module",
		"Namespace",
		"Operator",
		"Set",
		"Structure",
		"Using",
		"While",
		"With",
		"Do",
		"Loop",
		"For",
		"Next",
		"Property",
		"Continue",
		"AddHandler",
		"RemoveHandler",
		"Event",
		"RaiseEvent",
		"SyncLock"
	],
	symbols: /[=><!~?;\.,:&|+\-*\/\^%]+/,
	integersuffix: /U?[DI%L&S@]?/,
	floatsuffix: /[R#F!]?/,
	tokenizer: {
		root: [
			{ include: "@whitespace" },
			[/next(?!\w)/, { token: "keyword.tag-for" }],
			[/loop(?!\w)/, { token: "keyword.tag-do" }],
			[/end\s+(?!for|do)(addhandler|class|enum|event|function|get|if|interface|module|namespace|operator|property|raiseevent|removehandler|select|set|structure|sub|synclock|try|while|with|using)/, { token: "keyword.tag-$1" }],
			[/[a-zA-Z_]\w*/, { cases: {
				"@tagwords": { token: "keyword.tag-$0" },
				"@keywords": { token: "keyword.$0" },
				"@default": "identifier"
			} }],
			[/^\s*#\w+/, "keyword"],
			[/\d*\d+e([\-+]?\d+)?(@floatsuffix)/, "number.float"],
			[/\d*\.\d+(e[\-+]?\d+)?(@floatsuffix)/, "number.float"],
			[/&H[0-9a-f]+(@integersuffix)/, "number.hex"],
			[/&0[0-7]+(@integersuffix)/, "number.octal"],
			[/\d+(@integersuffix)/, "number"],
			[/#.*#/, "number"],
			[/[{}()\[\]]/, "@brackets"],
			[/@symbols/, "delimiter"],
			[/["\u201c\u201d]/, {
				token: "string.quote",
				next: "@string"
			}]
		],
		whitespace: [[/[ \t\r\n]+/, ""], [/(\'|REM(?!\w)).*$/, "comment"]],
		string: [
			[/[^"\u201c\u201d]+/, "string"],
			[/["\u201c\u201d]{2}/, "string.escape"],
			[/["\u201c\u201d]C?/, {
				token: "string.quote",
				next: "@pop"
			}]
		]
	}
};
//#endregion
//#region node_modules/@node-projects/monaco-editor-esm/esm/vs/basic-languages/_.contribution.js
var languageDefinitions = {};
var lazyLanguageLoaders = {};
var LazyLanguageLoader = class LazyLanguageLoader {
	static getOrCreate(languageId) {
		if (!lazyLanguageLoaders[languageId]) lazyLanguageLoaders[languageId] = new LazyLanguageLoader(languageId);
		return lazyLanguageLoaders[languageId];
	}
	constructor(languageId) {
		this._languageId = languageId;
		this._loadingTriggered = false;
		this._lazyLoadPromise = new Promise((resolve, reject) => {
			this._lazyLoadPromiseResolve = resolve;
			this._lazyLoadPromiseReject = reject;
		});
	}
	load() {
		if (!this._loadingTriggered) {
			this._loadingTriggered = true;
			languageDefinitions[this._languageId].loader().then((mod) => this._lazyLoadPromiseResolve(mod), (err) => this._lazyLoadPromiseReject(err));
		}
		return this._lazyLoadPromise;
	}
};
function registerLanguage(def) {
	const languageId = def.id;
	languageDefinitions[languageId] = def;
	languages.register(def);
	const lazyLanguageLoader = LazyLanguageLoader.getOrCreate(languageId);
	languages.registerTokensProviderFactory(languageId, { create: async () => {
		return (await lazyLanguageLoader.load()).language;
	} });
	languages.onLanguageEncountered(languageId, async () => {
		const mod = await lazyLanguageLoader.load();
		languages.setLanguageConfiguration(languageId, mod.conf);
	});
}
//#endregion
//#region node_modules/@node-projects/monaco-editor-esm/esm/vs/basic-languages/javascript/javascript.contribution.js
registerLanguage({
	id: "javascript",
	extensions: [
		".js",
		".es6",
		".jsx",
		".mjs",
		".cjs"
	],
	firstLine: "^#!.*\\bnode",
	filenames: ["jakefile"],
	aliases: [
		"JavaScript",
		"javascript",
		"js"
	],
	mimetypes: ["text/javascript"],
	loader: () => __vitePreload(() => import("./monaco-javascript-B1097IIy.js"), [], import.meta.url)
});
//#endregion
//#region node_modules/@node-projects/monaco-editor-esm/esm/vs/basic-languages/typescript/typescript.contribution.js
registerLanguage({
	id: "typescript",
	extensions: [
		".ts",
		".tsx",
		".cts",
		".mts"
	],
	aliases: [
		"TypeScript",
		"ts",
		"typescript"
	],
	mimetypes: ["text/typescript"],
	loader: () => {
		return __vitePreload(() => import("./monaco-typescript-DM-wLdVh.js"), [], import.meta.url);
	}
});
//#endregion
//#region node_modules/@node-projects/monaco-editor-esm/esm/vs/basic-languages/vb/vb.contribution.js
registerLanguage({
	id: "vb",
	extensions: [".vb"],
	aliases: ["Visual Basic", "vb"],
	loader: () => __vitePreload(() => import("./vb-SomxpGkh.js"), [], import.meta.url)
});
//#endregion
//#region node_modules/@node-projects/monaco-editor-esm/esm/vs/basic-languages/yaml/yaml.contribution.js
registerLanguage({
	id: "yaml",
	extensions: [".yaml", ".yml"],
	aliases: [
		"YAML",
		"yaml",
		"YML",
		"yml"
	],
	mimetypes: ["application/x-yaml", "text/x-yaml"],
	loader: () => __vitePreload(() => import("./monaco-yaml-CO-U1tpk.js"), [], import.meta.url)
});
//#endregion
//#region node_modules/@node-projects/monaco-editor-esm/esm/vs/editor/internal/initialize.js
function getGlobalMonaco() {
	return editor_api2_exports;
}
if (globalThis.MonacoEnvironment?.globalAPI) globalThis.monaco = getGlobalMonaco();
//#endregion
//#region src/services/monaco-lite.ts
languages.register({
	id: "json",
	extensions: [".json"],
	aliases: ["JSON", "json"],
	mimetypes: ["application/json"]
});
languages.setMonarchTokensProvider("json", { tokenizer: { root: [
	[/[{}[\],]/, "delimiter"],
	[/"([^"\\]|\\.)*"(?=\s*:)/, "attribute.name"],
	[/"([^"\\]|\\.)*"/, "string"],
	[/-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/, "number"],
	[/\b(?:true|false|null)\b/, "keyword"],
	[/:/, "delimiter"],
	[/\s+/, "white"]
] } });
languages.register({
	id: "vbscript",
	aliases: [
		"VBScript",
		"vbscript",
		"vbs"
	],
	extensions: [".vbs"]
});
languages.setLanguageConfiguration("vbscript", conf);
languages.setMonarchTokensProvider("vbscript", language);
//#endregion
export { CancellationTokenSource, Emitter, KeyCode, KeyMod, MarkerSeverity, MarkerTag, Position, Range, Selection, SelectionDirection, Token, Uri, editor, languages, language as n, conf as t };
