/**
 * @typedef {Object} Visitor
 * @property {Object} visitor
 */
/**
 * @param {Object} babel
 * @param {import("@babel/core").types} babel.types
 * @param {Options} opts
 * @return {Visitor} Visitor
 */
const reactShorthand = (babel, _opts) => {
  const { types: t } = babel;

  /**
   * @typedef {Object} Options
   */

  /**
   * @param {string} attribute name want to finding
   * @param {} attribute
   * @return {(attribute: import("@babel/core").NodePath<t.JSXAttribute>) => import("@babel/core").NodePath} attribute
   */
  const findJSXAttributeByName = (name) => (attribute) =>
    attribute.isJSXAttribute() && attribute.get("name").isJSXIdentifier({ name });

  const findJSXAttributeSuspense = findJSXAttributeByName("suspense");

  const getWrapper = (importSource) => {
    const importIdentifier = importSource.split(".").map((a) => t.jsxIdentifier(a));
    if (importIdentifier.length === 2) {
      return t.jsxMemberExpression(...importIdentifier);
    }

    return importIdentifier[0];
  };

  /**
   * @param {import('@babel/core').NodePath<t.Program>} root
   * @return {(path:import('@babel/core').NodePath<t.JSXElement>) => void}
   */
  const jsxElement = (root) => (path) => {
    const openingElement = path.get("openingElement");
    const attributes = openingElement.get("attributes");
    const suspenseAttribute = attributes.find(findJSXAttributeSuspense);
    if (!suspenseAttribute) return;

    const suspenseValue = suspenseAttribute.node.value;
    attributes.filter(findJSXAttributeSuspense).forEach((p) => p.remove());

    const wrapper = getWrapper(
      (() => {
        const importedSourceReact = root
          .get("body")
          .find((p) => p.isImportDeclaration() && p.get("source").isStringLiteral({ value: "react" }));

        if (importedSourceReact) {
          const specifiers = importedSourceReact.get("specifiers");
          /** @type {import('@babel/core').NodePath<t.ImportSpecifier>} */
          const importSuspense = specifiers.find(
            (p) => p.isImportSpecifier() && p.get("imported").isIdentifier({ name: "Suspense" }),
          );
          /** @type {import('@babel/core').NodePath<t.ImportDefaultSpecifier>} */
          const importDefault = specifiers.find((p) => p.isImportDefaultSpecifier());

          if (importSuspense) {
            return importSuspense.get("local").node.name;
          } else if (importDefault) {
            return importDefault.node.local.name.concat(".Suspense");
          }
        } else {
          root.unshiftContainer(
            "body",
            t.importDeclaration([t.importDefaultSpecifier(t.identifier("React"))], t.stringLiteral("react")),
          );
        }
        return "React.Suspense";
      })(),
    );

    path.replaceWith(
      t.jsxElement(
        t.jsxOpeningElement(wrapper, [t.jsxAttribute(t.jsxIdentifier("fallback"), suspenseValue)], false),
        t.jsxClosingElement(wrapper),
        [openingElement.parentPath.node],
      ),
    );
  };

  const Program = (p) => {
    p.traverse({
      JSXElement: jsxElement(p),
    });
  };

  const visitor = {
    Program,
  };

  return {
    visitor,
  };
};

module.exports = reactShorthand;
