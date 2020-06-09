import React from 'react'
import { Link } from 'gatsby'

import usePosts from 'src/hooks/use-posts'
import PostPreview from 'src/components/post-preview'
import Layout from 'src/components/layout'
import Hero from 'src/components/hero'

import './global.css'

export default function Index() {
  const posts = usePosts()

  return (
    <>
      <Hero />
      <Layout>
        <div>
          <h2 className="subtitle">Read my blog</h2>

          {posts.map((post) => (
            <PostPreview key={post.slug} post={post} />
          ))}
        </div>
      </Layout>
    </>
  )
}
