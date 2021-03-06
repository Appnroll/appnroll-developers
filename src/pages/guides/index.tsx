import React from "react"
import styled from "styled-components"
import BoxGrid from "../../components/base/box-grid/box-grid.component"
import Box from "../../components/base/box/box.component"
import PageTitle from "../../components/base/page-title/page-title.component"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import AppFunctionComponent from "../../types/app-function-component.interface"

const Content = styled.section`
  margin: 2rem;
`

const GuidePage: AppFunctionComponent = () => {
  return (
    <Layout>
      <SEO title="Guides" />
      <PageTitle>Guides</PageTitle>
      <Content>
        <BoxGrid>
          <Box
            title={"Code Review and Pull Requests"}
            description={"Learn about our GitHubbing."}
            link={"/guides/pr-and-cr-guide"}
          />
          <Box
            title={"Boards"}
            description={
              "List of Trello boards you might want to participate in."
            }
            link={"/guides/boards"}
          />
          <Box
            title={"Time tracking"}
            description={"Get a hold on the time tracking story."}
            link={"/guides/time-tracking"}
          />
          <Box
            title={"Objectives and Key Results"}
            description={
              "Learn how we set our focus to meet our goals and become the best."
            }
            link={"/guides/okr"}
          />
          <Box
            title={"Libraries"}
            description={
              "Learn how we install and configure external libraries to improve our job."
            }
            link={"/guides/libraries"}
          />
        </BoxGrid>
      </Content>
    </Layout>
  )
}

export default GuidePage
