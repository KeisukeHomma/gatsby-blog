import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


const frontendPage = ({ data, location }) => (
 <Layout location={location}>
   <SEO title="フロントエンド" />

   {data.allMicrocmsArticles.edges.map(edge => console.log(edge.node))}

   {data.allMicrocmsArticles.edges.map(edge => {
     const articles = edge.node
     const category = edge.node.category[0].name
     console.log('◆categoryは　' + category)

     if (category === 'frontend') {
       return (
        <React.Fragment key={articles.id}>
         <div>
            <Link to={`/articles/${articles.id}`}>
              <h2>{articles.title}</h2>
            </Link>
             {/* <p>{articles.feature}</p> */}
           {/* <img
             src={articles.pict.url}
             width={110}
             height={110}
             alt="pict画像"
           /> */}
         </div>
         <div>
             {articles.category.map(category => (
               <React.Fragment key={category.id}>
                 <span>カテゴリー：{category.name}</span>
               </React.Fragment>
             ))}
        </div>
        <hr />
       </React.Fragment>
       )
     } else { return <div></div> }
   })}
 </Layout>
)

export const query = graphql`
 {
    allMicrocmsArticles(
     sort: { fields: [createdAt], order: DESC }
   ) {
     edges {
       node {
         id
         title
         category {
           id
           name
         }
         body
       }
     }
   }
 }
`

export default frontendPage
