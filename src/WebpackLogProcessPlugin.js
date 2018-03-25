
class WebpackLogProcessPlugin{
    constructor(options){
        this.options = options;
        this.count = 0;
    }

    apply(compiler){
        compiler.plugin('run', (compiler, callback)=>{
            console.log("The Webpack process has started");
            callback();
        });

        compiler.plugin('watch-run', function(watching, callback){
            console.log("The Webpack process has started in 'watch' mode");
            callback();
        });


  


        compiler.plugin('normal-module-factory', (nmf)=>{
            
            nmf.plugin("after-resolve", (data, callback) => { 
                if(!data){
                    return callback();
                }
                if(data.request.includes('.css')){
                    if(this.count < 1){
                        console.log("DATA: " + JSON.stringify(data));
                    }
                }
                return callback(null, data);
            });
        });

        compiler.plugin('compile', function(params){
            console.log("Compiling assets...");
        });

        compiler.plugin('after-compile', function(compilation, callback){
            console.log("Compiling completed");
            callback();
        });

        compiler.plugin('emit', function(compilation, callback){
            console.log("Outputing files");
            callback();
        });

        compiler.plugin('done', function(stats){
            console.log("The Webpack process is complete");
        });
        
    }
};

module.exports = WebpackLogProcessPlugin;
