exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type ContentfulHomeBanner implements Node {
      image: ContentfulAsset
    }
    type ContentfulOportunidadesYBeneficios implements Node {
      image: ContentfulAsset
    }
    type ContentfulMetodologia implements Node {
      image: ContentfulAsset
    }
    type ContentfulContactanos implements Node {
      image: ContentfulAsset
    }
    type ContentfulNombreConFlaticon implements Node {
      link: String
    }
  `;
  createTypes(typeDefs);
};
