import { graphql } from "gatsby";
import React from "react"
import Layout from "../components/Layout"
import styles from '../styles/project-details.module.css'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default function ProjectDetails({ data }) {

	const { html } = data.markdownRemark
	const { title, stack, featuredImg } = data.markdownRemark.frontmatter
	const image = getImage(featuredImg)

	return (
		<Layout>
		<div className={styles.details}>
			<h2>{ title }</h2>
			<h3>{ stack }</h3>
			<div className={styles.featured}>
				<GatsbyImage image={ image } alt={ title } />
			</div>
			<div className={ styles.html } dangerouslySetInnerHTML={{ __html: html }} />
		</div>
		</Layout>
	)
}

export const query = graphql`
	query ProjectDetails($slug: String) {
		markdownRemark(frontmatter: {slug: {eq: $slug}}) {
			html
			id
			frontmatter {
				title
				stack
				slug
				date
				featuredImg {
					childImageSharp {
						gatsbyImageData
					}
				}
			}
		}
	}
`