import {
  Link,
  React,
  __toESM,
  init_react,
  require_react,
  useFetcher,
  useLoaderData
} from "/build/_shared/chunk-FRHOFGQU.js";

// browser-route-module:/project/remix-fetcher-more/app/routes/articles/index.tsx?browser
init_react();

// app/routes/articles/index.tsx
init_react();
var import_react = __toESM(require_react());
function ArticlesPage() {
  const { articles: loaderArticles, tags, total } = useLoaderData();
  const fetcher = useFetcher();
  const [articles, setArticles] = (0, import_react.useState)(loaderArticles);
  (0, import_react.useEffect)(() => {
    if (fetcher.data && fetcher.data.articles) {
      setArticles([...articles, ...fetcher.data.articles]);
    }
  }, [fetcher.data]);
  return /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-layout"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-start-2"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-3xl text-red-900"
  }, "Articles")), /* @__PURE__ */ React.createElement("div", {
    className: "col-start-2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-6 gap-2 my-4"
  }, tags.map((tag) => {
    return /* @__PURE__ */ React.createElement(Link, {
      key: tag.slug,
      to: `/articles/${tag.slug}`
    }, tag.slug);
  })), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-3 col-start-2 col-span-3 gap-4"
  }, articles.map((article) => {
    return /* @__PURE__ */ React.createElement("div", {
      key: article.slug
    }, article.slug);
  }), articles.length < total ? /* @__PURE__ */ React.createElement("div", {
    className: "col-span-3"
  }, /* @__PURE__ */ React.createElement("button", {
    onClick: () => {
      fetcher.load(`/articles?index&skip=${articles.length}`);
    },
    className: "w-full"
  }, "More...")) : "")));
}
export {
  ArticlesPage as default
};
//# sourceMappingURL=/build/routes/articles/index-6ZWO3CBH.js.map
