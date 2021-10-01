module.exports = function(eleventyConfig){

    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addWatchTarget("src/images");

    return{
        dir:{
            input: "src",

            output: "dist",
        }
    };
};