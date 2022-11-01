/* eslint-disable @typescript-eslint/no-use-before-define */
import { useEffect, useState } from 'react'
import { LoaderFunction, json, useLoaderData, useFetcher, Link } from 'remix'

interface Article {
  slug: string
}
interface Tag {
  slug: string
}

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url)
  const param = url.searchParams.get('skip')

  const skip = param === null ? 0 : parseInt(param, 10)

  const articles = await getArticles({ count: 9, skip })
  const tags = await getTags()
  const { title, subTitle } = getSiteData()

  const total = await getArticlesCount()

  return json({ articles, title, subTitle, tags, total })
}

export default function ArticlesPage() {
  const { articles: loaderArticles, tags, total } = useLoaderData()
  const fetcher = useFetcher()

  const [articles, setArticles] = useState(loaderArticles)

  useEffect(() => {
    if (fetcher.data && fetcher.data.articles) {
      setArticles([...articles, ...fetcher.data.articles])
    }
  }, [fetcher.data])

  //console.dir([articles?.length, total])

  return (
    <div className="grid grid-cols-layout">
      <div className="col-start-2">
        <h1 className="text-3xl text-red-900">Articles</h1>
      </div>
      <div className="col-start-2">
        <div className="grid grid-cols-6 gap-2 my-4">
          {tags.map((tag: Tag) => {
            return (
              <Link key={tag.slug} to={`/articles/${tag.slug}`}>
                {tag.slug}
              </Link>
            )
          })}
        </div>
        <div className="grid grid-cols-3 col-start-2 col-span-3 gap-4">
          {articles.map((article: Article) => {
            return <div key={article.slug}>{article.slug}</div>
          })}
          {articles.length < total ? (
            <div className="col-span-3">
              <button
                onClick={() => {
                  fetcher.load(`/articles?index&skip=${articles.length}`)
                }}
                className="w-full"
              >
                More...
              </button>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  )
}

function range(start: number, length: number) {
  return Array.from({ length }, (_, index) => start + index)
}

async function getArticles({ count, skip }: { count: number; skip: number }) {
  return range(skip, count).map((i) => ({
    slug: `article-${i + 1}`,
  }))
}

async function getTags() {
  return range(1, 3).map((i) => ({
    slug: `tag-${i}`,
  }))
}

async function getArticlesCount() {
  return 100
}

function getSiteData() {
  return {
    title: 'Remix Starter',
    subTitle: 'An example codesandbox',
  }
}
