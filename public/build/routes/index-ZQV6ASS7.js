import {
  Link,
  React,
  __toESM,
  init_react,
  require_react,
  useFetcher,
  useLoaderData
} from "/build/_shared/chunk-BARSCQ6X.js";

// browser-route-module:/sandbox/app/routes/index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();
var import_react = __toESM(require_react());
function ArticlesPage() {
  const { articles, tags, total } = useLoaderData();
  const fetcher = useFetcher();
  (0, import_react.useEffect)(() => {
    if (fetcher.data && fetcher.data.articles) {
      setArticles([...articles, ...fetcher.data.articles]);
    }
  }, [fetcher.data]);
  console.dir([articles == null ? void 0 : articles.length, total]);
  return /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-layout"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-start-2"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-3xl"
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
    return /* @__PURE__ */ React.createElement("p", {
      key: article.slug
    }, article.slug);
  }), articles.length < total ? /* @__PURE__ */ React.createElement("div", {
    className: "col-span-3"
  }, /* @__PURE__ */ React.createElement("button", {
    onClick: () => {
      fetcher.load(`/articles?skip=${articles.length}`);
    },
    className: "w-full"
  }, "More...")) : "")));
}
export {
  ArticlesPage as default
};
//# sourceMappingURL=/build/routes/index-ZQV6ASS7.js.map
