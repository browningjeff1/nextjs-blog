import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        {postData.title}
      </Head>
      <article>
        <h1 className={utilStyles.headingx1}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <p>{postData.built}</p>
          <p><a href={postData.link}>Link to project</a></p>
          <p><a href={postData.github}>Link to Github</a></p>
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}