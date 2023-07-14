import siteMetadata from '@/data/siteMetadata'
import { useTheme } from 'next-themes'
import React, { useEffect } from 'react'

const Giscus = () => {
  const { theme, resolvedTheme } = useTheme()
  const {
    themeURL,
    theme: lightTheme,
    darkTheme,
    lang,
    metadata,
    reactions,
    repo,
    category,
    categoryId,
    mapping,
    repositoryId,
  } = siteMetadata.comment.giscusConfig

  const COMMENTS_ID = 'comments-container'

  useEffect(() => {
    let isDark = theme === 'dark' || resolvedTheme === 'dark'
    let giscusTheme = isDark ? darkTheme : lightTheme
    if (themeURL) giscusTheme = themeURL

    let script = document.createElement('script')
    script.src = 'https://giscus.app/client.js'
    script.setAttribute('data-repo', repo)
    script.setAttribute('data-repo-id', repositoryId)
    script.setAttribute('data-category', category)
    script.setAttribute('data-category-id', categoryId)
    script.setAttribute('data-mapping', mapping)
    script.setAttribute('data-reactions-enabled', reactions)
    script.setAttribute('data-emit-metadata', metadata)
    script.setAttribute('data-lang', lang)
    script.setAttribute('data-theme', giscusTheme)
    script.setAttribute('crossOrigin', 'anonymous')
    script.async = true

    let commentsNode = document.getElementById(COMMENTS_ID)
    if (commentsNode) commentsNode.appendChild(script)

    return () => {
      let comments = document.getElementById(COMMENTS_ID)
      if (comments) comments.innerHTML = ''
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme, resolvedTheme])

  return (
    <div className="pb-6 pt-6 text-center text-gray-700 dark:text-gray-300">
      <div className="giscus" id={COMMENTS_ID} />
    </div>
  )
}

export default Giscus
