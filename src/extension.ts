import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    const block = () => {
        setTimeout(() => {
            for (let i = 0; i < 10000; i++) {
                console.log(i);
            }

            block();
        }, 500);
        
    };
	let disposable = vscode.commands.registerCommand('extension-blocker.throttling', () => {
        block();
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
