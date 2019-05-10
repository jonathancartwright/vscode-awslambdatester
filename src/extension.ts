// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { RequireExtension } from './requireExtension';
import { walkDir } from './dir';
// tslint:disable-next-line:no-unused-expression
new RequireExtension('/Users/cartj189/source/dots/wdw-cast-dots-serverless/');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "awslambdatester" is now active!');
	vscode.commands.executeCommand('editor.action.addCommentLine');


	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.openFolder', async () => {
		vscode.window.showInformationMessage('Hello World!');
		// The code you place here will be executed every time your command is executed
		let uri = vscode.Uri.file('/Users/cartj189/source/dots/wdw-cast-dots-serverless/cloud/entry/castMemberRestHandler.js');
		//let success = await vscode.commands.executeCommand('vscode.executeDocumentSymbolProvider', uri);
		/* walkDir('/Users/cartj189/source/dots/wdw-cast-dots-serverless/cloud/entry/', (file: string) => {
			console.log(file);
			if (file.endsWith('.js')) {
				try {
					var myexports = require(file);
					console.log(Object.keys(myexports));
				} catch (ex) {
					console.error(`there was a problem with ${file}. the error was ${ex}`);
				}
			}
		}); */
		let p=new vscode.Position(39,0);
		let success = await vscode.commands.executeCommand('vscode.executeDocumentSymbolProvider', uri);
		console.log(success);
		let suc = await vscode.commands.executeCommand('vscode.executeDefinitionProvider',uri,p);
		console.log(suc);

		//let success = await vscode.commands.getCommands(false);
		//success.forEach(element => {
		//	console.log(element);
		//});
		// Display a message box to the user

	});


	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() { }
