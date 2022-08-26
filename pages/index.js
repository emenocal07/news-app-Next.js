import PageLayout from "../components/PageLayout"
import styles from "../styles/Home.module.css"
import Image from "next/image"

export default function Home({ articles }) {
  return (
    <>
      <PageLayout title="NewsApp - Home">
        <h1 className={styles.title}>Wall Street Journal report</h1>
        <div className={styles.container}>
          {articles?.length === 0 && <p>No articles</p>}
          {articles?.length > 0 &&
            articles.map((article, index) => (
              <article className={styles.article} key={index}>
                <div className={styles.newsContainer}>
                  <h2>{article.title}</h2>
                  <h6>By: {article.author}</h6>
                  <picture>
                    <img src={article.urlToImage} alt={`Image for the article ${article.title}`} />
                  </picture>
                  <Image
                    width={40}
                    height={50}
                    src={
                      "https://res.cloudinary.com/deif2qotx/image/upload/v1649242357/alvan-nee-ZCHj_2lJP00-unsplash_halvzi.jpg"
                    }
                    alt="Image description"
                  />
                  <p>{article.description}</p>
                  <a href={`${article.url}`}>Read full article</a>
                </div>
              </article>
            ))}
        </div>
      </PageLayout>
    </>
  )
}

// export async function getStaticProps() {
//   const response = await fetch(
//     "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=312b5e00f0e14b61b3784d8df63db8bd"
//   )
//   const { articles } = await response.json()
//   return {
//     props: {
//       articles,
//     },
//   }
// }

// ESTE MÉTIDO SE EJECUTA EN EL SERVIDOR
export async function getServerSideProps() {
  const response = await fetch(
    "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=312b5e00f0e14b61b3784d8df63db8bd"
  )
  const { articles } = await response.json()
  return {
    props: {
      articles,
    },
  }
}
