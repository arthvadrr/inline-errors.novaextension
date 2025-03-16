const InlineErrorLens = require('./inlineIssues.js');

exports.activate = function() {
  console.log('✅ ErrorLens Extension Activated!');

  nova.workspace.onDidAddTextEditor((editor) => {
    console.log(`📝 Editor opened: ${editor.document.path}`);

    editor.onDidStopChanging(() => {
      console.log(`✍️ Document changed: ${editor.document.path}`);
      InlineErrorLens.updateIssues(editor);
    });
  });

  console.log('✅ Issue Handler Registered!');
};

exports.deactivate = function() {
  console.log('❌ ErrorLens Extension Deactivated!');
};
