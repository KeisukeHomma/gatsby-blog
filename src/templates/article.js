//templates/article.js
import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const ArticlePost = ({ data, location }) => {
 const post = data.microcmsArticles // ㊟allMicrocmsArticleでない

 return (
   <Layout location={location}>
     <div>
       <h2>{post.title}</h2>
       {/* <h3>原文：{post.title_origin}</h3> */}
       <br />
       {/* <img
         src={post.pict.url}
         width={160}
         height={110}
         alt="pict画像"
       /> */}
       <div
         dangerouslySetInnerHTML={{
           __html: `${post.body}`,
         }}
       ></div>
     </div>
   </Layout>
 )
}

export default ArticlePost

export const query = graphql`
 query($id: String!) {
   microcmsArticles(id: { eq: $id }) {
     title
     body
   }
 }
`
