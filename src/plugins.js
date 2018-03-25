
function WebpackLogProcessPlugin(options){};

WebpackLogProcessPlugin.prototype.apply = function(compiler){
        compiler.plugin('run', function(compiler){
            console.log("The Webpack process has started");
        });

        compiler.plugin('watch-run', function(watching){
            console.log("The Webpack process has started in 'watch' mode");
        });

        compiler.plugin('compilation', function(compilation, params){
            console.log("Compilation created? Is this needed? Or Useful?");
        });

        compiler.plugin('compile', function(params){
            console.log("Compiling assets...");
        });

        compiler.plugin('after-compile', function(compilation){
            console.log("Compiling completed");
        });

        compiler.plugin('emit', function(compilation){
            console.log("Outputing files");
        });

        compiler.plugin('done', function(stats){
            console.log("The Webpack process is complete");
        });

        compiler.parser.plugin('program', function(ast){
            console.log("In 'compiler.parser.plugin('program')': ");
            console.log(`${ast}`);
        });

        compiler.parser.plugin('statement', function(statement){
            console.log("In 'compiler.parser.plugin('statement')': ");
            console.log(`${statement}`);
        });
}


module.exports = WebpackLogProcessPlugin;

// /********** */

// function apply(options, compiler) {
//     //now you have access to the compiler instance
//     //and options
// }

// //this little trick makes it easier to pass and check options to the plugin
// module.exports = function(options) {
//     if (options instanceof Array) {
//         options = {
//             include: options
//         };
//     }

//     if (!Array.isArray(options.include)) {
//         options.include = [ options.include ];
//     }

//     return {
//         apply: apply.bind(this, options)
//     };
// };


// /************** */
// function FileListPlugin(options) {}

// FileListPlugin.prototype.apply = function(compiler) {
//     compiler.plugin('emit', function(compilation, callback) {
//       // Create a header string for the generated file:
//       var filelist = 'In this build:\n\n';
  
//       // Loop through all compiled assets,
//       // adding a new line item for each filename.
//       for (var filename in compilation.assets) {
//         filelist += ('- '+ filename +'\n');
//       }
      
//       // Insert this list into the Webpack build as a new file asset:
//       compilation.assets['filelist.md'] = {
//         source: function() {
//           return filelist;
//         },
//         size: function() {
//           return filelist.length;
//         }
//       };
  
//       callback();
//     });
//   };
  
//   module.exports = FileListPlugin;