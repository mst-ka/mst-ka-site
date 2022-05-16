module.exports = {
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  images: {
    loader: "custom",
    nextImageExportOptimizer: {
      imageFolderPath: "public/images",
      exportFolderPath: "out",
      quality: 75,
    },
  },
}
