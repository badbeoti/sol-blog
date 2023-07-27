import Header from '@/components/Header'
import SectionContainer from './SectionContainer'
import Footer from './Footer'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <Header />
      <div className="mx-auto max-w-3xl px-3 sm:px-6 xl:max-w-5xl xl:px-0">
        <div className="flex flex-col justify-between">
          <main className="">{children}</main>
          <Footer />
        </div>
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
