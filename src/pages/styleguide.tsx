import { graphql } from "gatsby"
import React from "react"
import CodeStyleGuide from "../components/base/code-style-guide/code-style-guide.component"
import GuideContent from "../components/base/guide-content/guide-content.component"
import GuideLayout from "../components/base/layout-block/guide-layout"
import PageContribution from "../components/base/page-contribution/page-contribution.component"
import PageTitle from "../components/base/page-title/page-title.component"
import StyleguideTableOfContentsItem from "../components/base/styleguide-table-of-contents/styleguide-table-of-contents-item.interface"
import StyleguideTableOfContents from "../components/base/styleguide-table-of-contents/styleguide-table-of-contents.component"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AppFunctionComponent from "../types/app-function-component.interface"
import { GithubContributors } from "../types/github-contributors.interface"

interface Props {
  data: {
    guide: {
      body: string
      tableOfContents: {
        items: StyleguideTableOfContentsItem[]
      }
    }
    github: GithubContributors
  }
}

const StyleGuidePage: AppFunctionComponent<Props> = ({
  data: {
    guide: {
      body: styleGuideBody,
      tableOfContents: { items: tocItems },
    },
    github,
  },
}) => {
  return (
    <Layout>
      <SEO title="Code Styleguide" />
      <PageTitle>Code Styleguide</PageTitle>
      <PageContribution
        contributions={github}
        path={"src/content/styleguide.mdx"}
      />
      <GuideLayout>
        <StyleguideTableOfContents items={tocItems} />
        <GuideContent>
          <CodeStyleGuide content={styleGuideBody} />
        </GuideContent>
      </GuideLayout>
    </Layout>
  )
}

export default StyleGuidePage

export const query = graphql`
  {
    guide: mdx(fileAbsolutePath: { glob: "**/styleguide.mdx" }) {
      body
      tableOfContents
    }
    github {
      repository(owner: "Appnroll", name: "appnroll-developers") {
        object(expression: "master") {
          ... on GitHub_Commit {
            history(first: 100, path: "src/content/styleguide.mdx") {
              nodes {
                authoredDate
                author {
                  user {
                    name
                    avatarUrl
                    login
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
