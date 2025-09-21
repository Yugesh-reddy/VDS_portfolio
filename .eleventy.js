const now = String(Date.now())

module.exports = function (eleventyConfig) {
  // Ignore directories and files that shouldn't be processed
  eleventyConfig.ignores.add("docs")
  eleventyConfig.ignores.add("_site")
  eleventyConfig.ignores.add("node_modules")
  eleventyConfig.ignores.add("README.md")

  eleventyConfig.addWatchTarget('./styles/tailwind.config.js')
  eleventyConfig.addWatchTarget('./styles/tailwind.css')

  eleventyConfig.addPassthroughCopy({ './_tmp/style.css': './style.css' })
  eleventyConfig.addPassthroughCopy('./*.svg')
  eleventyConfig.addPassthroughCopy('./*.html')
  eleventyConfig.addPassthroughCopy('./photos/*.jpg')

  eleventyConfig.addShortcode('version', function () {
    return now
  })
};
